class Project < ApplicationRecord
  has_many :project_members
  has_many :users, through: :project_members

  has_many :daily_logs, through: :project_members
  has_many :weekly_project_reports
end
