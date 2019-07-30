module Api
  class Api::UsersController < ApplicationController

    def index
      render json: User.all
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render json: { message: e.message }, status: :not_found
    end
  
  end
end