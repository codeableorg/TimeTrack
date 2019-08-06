class AddUserToUserProjectReport < ActiveRecord::Migration[5.2]
  def change
    add_reference :user_project_reports, :user, foreign_key: true
  end
end
