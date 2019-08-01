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
    update_attribute(:reset_created_at, Time.zone.now)
  end

  def reset_token_expired?
    reset_created_at < 2.hour.ago
  end

  def availableTimeRange(startDate, endDate)
    workingDaysRange = (startDate..endDate).filter {|d| (1..5).include?(d.wday) }
    listProjectAssigned = self.project_members.includes(:project)
    return Array.new(workingDaysRange.length, 100) if projects.size == 0

    listTimeByProject = listProjectAssigned.map do |project|
      projectTimeRange = (project.project.start_date..project.project.end_date).filter {|d| (1..5).include?(d.wday) }
      percentageTimeAssigned = 100 * project.estimated_cost/(self.rate * 8 * projectTimeRange.size)
      projectTimeRange.reduce(Hash.new(0)) do |obj, day| 
        obj[day.strftime("%d/%m")] = percentageTimeAssigned
        obj
      end
    end

    workingDaysRange.map do |day|
      listTimeByProject.reduce(100) { |sum, project| sum - project[day.strftime("%d/%m")]}
    end
  end
end
