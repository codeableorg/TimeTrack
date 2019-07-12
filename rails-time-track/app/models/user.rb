class User < ApplicationRecord
  has_many :project_members
  has_many :projects, through: :project_members

  has_many :daily_logs, through: :project_members
end
