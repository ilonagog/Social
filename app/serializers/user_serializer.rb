class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :name, :image_url, :bio
  has_many :posts

   def image_url
    Rails.application.routes.url_helpers.rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
   end


end
