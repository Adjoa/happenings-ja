class Organizer < ApplicationRecord
  has_one :address, as: :addressable, dependent: :destroy
  has_many :events, dependent: :destroy
  
  accepts_nested_attributes_for :address
  
  validates :name, :password_digest, presence: true
  validates :email, 
            :presence => true, 
            :uniqueness => true, 
            :format => { :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
end
