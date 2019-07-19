class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :client, :category, :start_date, :end_date, :closed, :estimated_cost, :real_cost, :members

  def members
    self.object.users.select("users.id, users.name, users.role")
  end
end