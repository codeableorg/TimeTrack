class AddEnableToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :isActive, :boolean, default: true
  end
end
