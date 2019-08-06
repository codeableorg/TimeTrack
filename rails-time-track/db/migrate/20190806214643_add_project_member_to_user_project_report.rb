class AddProjectMemberToUserProjectReport < ActiveRecord::Migration[5.2]
  def change
    add_reference :user_project_reports, :project_member, foreign_key: true
  end
end
