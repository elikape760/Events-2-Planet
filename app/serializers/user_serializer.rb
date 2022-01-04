class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :origin, :event_creation
end
