class Event < ApplicationRecord
  belongs_to :organizer
  has_one :address, as: :addressable
end
