class Organizer < ApplicationRecord
  has_one :address, as: :addressable, dependent: :destroy
  has_many :events, dependent: :destroy
  
  accepts_nested_attributes_for :address
end
