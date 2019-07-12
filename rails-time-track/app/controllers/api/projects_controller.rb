module Api
  class Api::ProjectsController < ApplicationController

    def index
      render json: Project.where(closed: false)
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render json: { message: e.message }, status: :not_found
    end
  
  end
end