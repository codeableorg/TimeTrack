module Api
  class Api::ProjectsController < ApplicationController

    before_action :set_project, only: [:show]

    def index
      if params[:user_id]
        render json: User.find(params[:user_id]).projects.where(closed: false)
      else
        render json: Project.where(closed: false)
      end
    end

    def show
      render json: @project
    end

    def create
      project = Project.new(name: params[:name],
                            client: params[:client],
                            category: params[:category],
                            start_date: params[:start_date],
                            end_date: params[:end_date],
                            estimated_cost: params[:estimated_cost],
                            real_cost: params[:real_cost],
                            closed: false,)
      if project.save
        if params[:members].all? do |member|
          p member.to_s
          newMember = ProjectMember.new(
                                        user_id: member[:user_id],
                                        estimated_cost: member[:estimated_cost],
                                        real_cost: 0
                                        )
          newMember.project_id = project.id
          newMember.save
        end
          render json: { message: "Project created successfully" }, status: :created
        else
          ProjectMember.where(project_id:project.id).destroy_all
          project.destroy
          render_errors(project.errors, :unprocessable_entity)
        end
      else
        render_errors(project.errors, :unprocessable_entity)
      end
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render_errors(e.message, :not_found)
    end

    private    
    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(  [ :name, 
                                          :client,
                                          :category,
                                          :start_date,
                                          :end_date,
                                          :estimated_cost], 
                                      members: [:user_id, :estimated_cost])
    end
  
  end
end