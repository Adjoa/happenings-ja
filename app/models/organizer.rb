class Organizer < ApplicationRecord
  has_one :address, as: :addressable, dependent: :destroy
end
