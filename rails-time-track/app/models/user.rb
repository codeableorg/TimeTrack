class User < ApplicationRecord

  validates :email, format: { with: /[a-zA-Z0-9]*@[a-zA-Z]*.[a-zA-Z0-9]*/, message: "Bad format"  }, presence: true, uniqueness: true
  # validates :name, presence: true
  # validates :role, presence true
  # validates :rate, presence true

  has_secure_password
  has_secure_token
  has_secure_token :reset_digest

  has_many :project_members
  has_many :projects, through: :project_members
  has_many :daily_logs, through: :project_members

  def self.valid_login?(email, password)
    user = find_by(email: email)
    user if user&.authenticate(password)
  end

  def invalidate_token
    update(token: nil)
  end

  def send_reset_password_email
    UserMailer.with(user: self).reset_password.deliver_now
  end

  def regenerate_and_timestamp_reset_token
    regenerate_reset_digest
    update_attribute(:reset_created_at,Time.zone.now)
  end

  def reset_token_expired?
    reset_created_at < 2.hour.ago
  end
end
