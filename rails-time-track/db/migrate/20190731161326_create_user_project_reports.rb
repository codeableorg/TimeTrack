class CreateUserProjectReports < ActiveRecord::Migration[5.2]
  def change
    create_table :user_project_reports do |t|
      t.references :project, foreign_key: true
      t.integer :day
      t.integer :estimated_cost
      t.integer :real_cost

      t.timestamps
    end
  end
end
