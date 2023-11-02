class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id, :username, :created_at
  belongs_to :user
  belongs_to :post

  def username
    object.user.name
  end
  # def created_at
  #   object.created_at.strftime('%Y-%m-%d %H:%M:%S')
  # end
  def created_at
    object.created_at.in_time_zone('Eastern Time (US & Canada)').strftime('%m/%d/%Y %I:%M %p')
  end
  
end

