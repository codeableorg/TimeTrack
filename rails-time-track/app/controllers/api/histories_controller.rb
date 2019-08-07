module Api
  class Api::HistoriesController < ApplicationController

    before_action :authenticate_owner_or_manager, only: [:index]

    def index
      if params[:user_id]
        render json: User.find(params[:user_id]).projects.where(closed: true)
      else
        if @current_user.role === "Owner"
          render json: Project.where(closed: true)
        else
          render json: User.find(@current_user.id).projects.where(closed: true)
        end
      end
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render_errors(e.message, :not_found)
    end

  end
end