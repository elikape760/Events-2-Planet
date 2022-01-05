class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :location, :description
  # has_one :user
  has_many :comments
end
