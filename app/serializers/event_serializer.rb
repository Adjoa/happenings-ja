class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_time, :end_time, :description, :contact_email, :contact_phone, :website
  has_one :address
  belongs_to :organizer
end
