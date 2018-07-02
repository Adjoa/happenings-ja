class Event < ApplicationRecord
  belongs_to :organizer
  has_one :address, as: :addressable, dependent: :destroy
  
  accepts_nested_attributes_for :address
  
  validates :name, :start_time, presence: true
end
