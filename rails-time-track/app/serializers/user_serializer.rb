class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :role, :rate, :projects

  def projects

    self.object.projects.select("projects.id, projects.name")
  end

end
