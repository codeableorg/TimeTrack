class ProjectMember < ApplicationRecord
  belongs_to :user
  belongs_to :project

  has_many :daily_logs
  has_many :user_project_reports
end
