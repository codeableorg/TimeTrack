module Api
  class Api::WeeklyProjectReportsController < ApplicationController

    before_action :set_project_report, only: [:show]

    def show
      render json: @project_report
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render_errors(e.message, :not_found)
    end

    private    
    def set_project_report
      @project_report = WeeklyProjectReport.where(project: params[:id])
    end
  
  end
end