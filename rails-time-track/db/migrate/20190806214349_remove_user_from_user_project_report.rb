class RemoveUserFromUserProjectReport < ActiveRecord::Migration[5.2]
  def change
    remove_column :user_project_reports, :user_id
    remove_column :user_project_reports, :project_id
  end
end
