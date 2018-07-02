class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :start_time
      t.datetime :end_time
      t.text :description
      t.string :contact_email
      t.string :contact_phone
      t.string :website
      t.belongs_to :organizer, foreign_key: true
    end
  end
end
