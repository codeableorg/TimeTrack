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
      project = Project.new(project_params[0])
      if project
        params[:members].each {|info| ProjectMember.create(info)}
        render json: project, status: :created
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
      [ 
        params.permit(:name, :client, :category, :start_date,
                      :end_date, :estimated_cost),
        params.permit(:members)
      ]
    end
  
  end
end