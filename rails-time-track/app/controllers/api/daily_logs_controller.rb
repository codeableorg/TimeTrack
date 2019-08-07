module Api
  class Api::DailyLogsController < ApplicationController

    def index
      render json: DailyLog.all
    end

    def create
      if params[:data].all? do |daily|
        user = daily[:user_id]
        date = daily[:date]
        project_member = ProjectMember.find_by(project_id: daily[:project_id], user_id: daily[:user_id])
        
        found = DailyLog.find_by(project_member: project_member.id, date: daily[:date])
        unless found 
          daily_log = DailyLog.new(
            project_member: project_member,
            date: daily[:date],
            amount: daily[:amount]
          )
          daily_log.save
        else
          false
        end
      end
      render json: { message: "Daily Logs saved" }, status: :created
      else
        render_errors("Daily Log already exists", :unprocessable_entity)
      end
      
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render json: { message: e.message }, status: :not_found
    end
  
  end
end