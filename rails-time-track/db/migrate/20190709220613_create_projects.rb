class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :client
      t.string :category
      t.date :start_date
      t.date :end_date
      t.boolean :closed
      t.integer :estimated_cost
      t.integer :real_cost

      t.timestamps
    end
  end
end
