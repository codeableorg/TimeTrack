module Api
  class Api::ProjectMembersController < ApplicationController

    before_action :set_project_member_report, only: [:report_detail]

    def index
      if params[:user_id] && params[:project_id]
        user = User.find(params[:user_id])
        project = Project.find(params[:project_id])
        render json: ProjectMember.where(user_id: user, project_id: project)
      else
        render json: ProjectMember.all
      end
    end

    def report_detail
      render json: @project_member_report, serializer: ProjectMemberReportSerializer
    end
    
    rescue_from ActiveRecord::RecordNotFound do |e|
      render_errors(e.message, :not_found)
    end

    private    
    def set_project_member_report
      @project_member_report = ProjectMember.find_by(
                                                      project_id: params[:project_id],
                                                      user_id:params[:user_id]
                                                    )
    end
  
  end
end