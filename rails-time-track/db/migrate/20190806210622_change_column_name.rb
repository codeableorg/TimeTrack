class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :user_project_reports, :day, :week
  end
end
