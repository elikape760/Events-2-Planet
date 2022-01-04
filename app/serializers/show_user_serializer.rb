class ShowUserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :origin, :event_creation

  has_many :events
end
