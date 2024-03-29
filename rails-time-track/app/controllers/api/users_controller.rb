module Api
  class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :update_state]

    def index
      render json: User.all
    end

    def create
      user = User.new(user_params)
      if user.save
        render json: user, status: :created
      else
        render_errors(user.errors.full_messages.join("|"), :unprocessable_entity)
      end
    end

    def show 
      render json: @user
    end

    def update
      @user.update(user_params)
      if @user.update(user_params)
        @user.update(rate: @user.rate*100)
        render json: @user, status: :ok
      else
        render_errors(@user.errors.full_messages.join("\n"), :unprocessable_entity)
      end
    end

    def update_state
      if @user.update(isActive:params[:isActive])
        render json: @user, status: :ok
      else
        render_errors(@user.errors.full_messages.join("\n"), :unprocessable_entity)
      end
    end
    
    def available_time
      render json: User.where(isActive: true), each_serializer: UserAvailableTimeSerializer, option_name: params
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