class Organizer < ApplicationRecord
  has_one :address, as: :addressable
end
