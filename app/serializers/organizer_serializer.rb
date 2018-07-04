class OrganizerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone
  has_many :events
end
