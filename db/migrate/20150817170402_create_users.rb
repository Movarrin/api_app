class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.boolean :nytimes
      t.boolean :wired
      t.boolean :weather
      t.boolean :soccer
      t.boolean :topnews

      t.timestamps null: false
    end
  end
end
