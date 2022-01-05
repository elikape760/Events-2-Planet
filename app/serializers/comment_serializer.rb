class CommentSerializer < ActiveModel::Serializer
  attributes :id, :name, :comment, :date, :event_id
  belongs_to :event
end
