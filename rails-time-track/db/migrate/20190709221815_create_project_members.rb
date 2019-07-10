class CreateProjectMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :project_members do |t|
      t.references :user, foreign_key: true
      t.references :project, foreign_key: true
      t.integer :estimated_cost
      t.integer :real_cost

      t.timestamps
    end
  end
end
