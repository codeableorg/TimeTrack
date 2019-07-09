class AddUniqueIndexToDailyLog < ActiveRecord::Migration[5.2]
  def change
    add_index :daily_logs, [:project_members_id, :date], unique: true
  end
end
