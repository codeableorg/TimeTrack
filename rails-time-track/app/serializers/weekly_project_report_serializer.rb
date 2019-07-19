class WeeklyProjectReportSerializer < ActiveModel::Serializer
  
  attributes :id, :project_id, :week, :estimated_cost, :real_cost

end