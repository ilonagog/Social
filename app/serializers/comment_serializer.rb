class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id, :username, :created_at
  belongs_to :user
  belongs_to :post

  def username
    object.user.name
  end
  def created_at
    object.created_at.strftime('%Y-%m-%d %H:%M:%S')
  end
end
