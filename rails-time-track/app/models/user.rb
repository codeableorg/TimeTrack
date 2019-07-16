class User < ApplicationRecord
  has_secure_password
  has_secure_token

  has_many :project_members
  has_many :projects, through: :project_members
  has_many :daily_logs, through: :project_members

  def self.valid_login?(email, password)
    user = find_by(email: email)
    user if user&.authenticate(password)
  end
end
