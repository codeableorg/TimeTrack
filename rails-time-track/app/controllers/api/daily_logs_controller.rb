module Api
  class Api::DailyLogsController < ApplicationController

    def index
      render json: DailyLog.all
    end

    def create
      daily_log = DailyLog.new(new_daily_log_params)
      if daily_log.save
        render json: daily_log, status: 201
      else
        render_error_message(daily_log.errors.messages, 400)
      end
    end
    
    def new_daily_log_params
      params.permit(:project_member_id, :date, :amount)
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render json: { message: e.message }, status: :not_found
    end
  
  end
end