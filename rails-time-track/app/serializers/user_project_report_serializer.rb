class UserProjectReportSerializer < ActiveModel::Serializer
  attributes :id, :week, :estimated_cost, :real_cost
end