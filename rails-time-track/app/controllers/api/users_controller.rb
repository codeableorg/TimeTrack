module Api
  class Api::UsersController < ApplicationController

    def index
      render json: User.all
    end

    def show
      render json: User.find(params[:id]), status: :ok
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render json: { message: e.message }, status: :not_found
    end
  
  end
end