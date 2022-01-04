class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :name
      t.string :comment
      t.string :date

      t.timestamps
    end
  end
end
