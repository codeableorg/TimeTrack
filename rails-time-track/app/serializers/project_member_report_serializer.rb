class ProjectMemberReportSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :project_id, :estimated_cost, :real_cost, :details

  def details
    object.user_project_reports
  end

  has_many :details, serializer: UserProjectReportSerializer
  
end
