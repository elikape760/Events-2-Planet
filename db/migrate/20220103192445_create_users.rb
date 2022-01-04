class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :origin
      t.integer :event_creation
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
