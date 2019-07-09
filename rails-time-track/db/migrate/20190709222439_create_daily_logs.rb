class CreateDailyLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :daily_logs do |t|
      t.references :project_members, foreign_key: true
      t.date :date
      t.integer :amount

      t.timestamps
    end
  end
end
