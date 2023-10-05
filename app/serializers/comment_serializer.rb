class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id, :username
  belongs_to :user
  belongs_to :post

  def username
    
    object.user.name
  end
end
