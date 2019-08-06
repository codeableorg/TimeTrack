class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :role, :rate, :isActive
end
