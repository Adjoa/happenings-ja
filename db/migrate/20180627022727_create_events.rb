class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.date :date
      t.time :start_time
      t.time :end_time
      t.text :description
      t.string :contact_email
      t.string :contact_phone
      t.string :website
      t.belongs_to :organizer, foreign_key: true
      
      t.timestamps
    end
  end
end
