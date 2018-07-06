class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true, required: false
  
  validates :line1, :city, :parish, :country, presence: true
end
