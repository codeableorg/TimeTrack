module Api
  class Api::ProjectsController < ApplicationController

    before_action :set_project, only: [:show]

    before_action :authenticate_owner_or_manager, only: [:index]

    def index
      if params[:user_id]
        render json: User.find(params[:user_id]).projects.where(closed: false)
      else
        if @current_user.role === "Owner"
          render json: Project.where(closed: false)
        else
          render json: current_user.projects.where(closed: false)
        end
      end
    end

    def my_projects
      render json: current_user.projects.where(closed: false)
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
                            real_cost: 0,
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

    def update
      if @project.update(project_params)
        render json: @project, status: :ok
      else
        render json: {errors: @project.errors}
      end
    end
    
    def close
      if @project.update({closed: true})
        render json: @project, status: :ok
      else 
        render json: {errors: @project.errors}
      end
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
      # params.permit(:closed)
    end

    
  end
end