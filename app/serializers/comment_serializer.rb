class CommentSerializer < ActiveModel::Serializer
  attributes :id, :name, :comment, :date
end
