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

    rescue_from ActiveRecord::RecordNotFound do |e|
      render json: { message: e.message }, status: :not_found
    end

    private    
    def set_project
      @project = Project.find(params[:id])
    end
  
  end
end