class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_time, :end_time, :description
  has_one :address
end
