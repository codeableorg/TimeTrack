module Api
  class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :updateState]

    def index
      render json: User.all
    end

    def create
      user = User.new(user_params)
      if user.save
        render json: user, status: :created
      else
        render_errors(user.errors.full_messages.join("\n"), :unprocessable_entity)
      end
    end

    def show 
      render json: @user
    end

    def update
      if @user.update(user_params)
        render json: @user, status: :ok
      else
        render_errors(@user.errors.full_messages.join("\n"), :unprocessable_entity)
      end
    end

    def updateState
      if @user.update(isActive:params[:isActive])
        render json: @user, status: :ok
      else
        render_errors(@user.errors.full_messages.join("\n"), :unprocessable_entity)
      end
    end
    
    def availableTime
      render json: User.all, each_serializer: UserAvailableTimeSerializer, option_name: params
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render_errors(e.message, :not_found)
    end

    private 

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.permit(:name, :email, :password, :role, :rate)
    end

  end
end