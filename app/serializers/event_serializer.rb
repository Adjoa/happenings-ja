class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_time, :end_time, :description, :organizer_id
  has_one :address
  belongs_to :organizer
end
