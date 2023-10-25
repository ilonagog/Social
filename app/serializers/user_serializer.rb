class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :name, :image_url, :bio, :uniq_p
  # has_many :posts
  has_many :messages

   def image_url
    Rails.application.routes.url_helpers.rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
   end

   def uniq_p
    object.posts.uniq
   end

end
