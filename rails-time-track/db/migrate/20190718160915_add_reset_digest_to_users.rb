class AddResetDigestToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :reset_digest, :string
    add_column :users, :reset_created_at, :string
  end
end
