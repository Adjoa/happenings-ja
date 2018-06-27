class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :line1
      t.string :line2
      t.string :city
      t.string :parish
      t.string :country
      t.belongs_to :addressable, polymorphic: true

      t.timestamps
    end
  end
end
