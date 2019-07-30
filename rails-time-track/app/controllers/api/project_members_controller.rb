module Api
  class Api::ProjectMembersController < ApplicationController

    def index
      if params[:user_id] && params[:project_id]
        user = User.find(params[:user_id])
        project = Project.find(params[:project_id])
        render json: ProjectMember.where(user_id: user, project_id: project)
      else
        render json: ProjectMember.all
      end
    end
    
    rescue_from ActiveRecord::RecordNotFound do |e|
      render json: { message: e.message }, status: :not_found
    end
  
  end
end