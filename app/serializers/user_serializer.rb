class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :name, :image_url, :bio, :uniq_p
  # has_many :posts
  # has_many :messages
  
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id"
  has_many :received_messages, class_name: "Message", foreign_key: "receiver_id"

   def image_url
    if object.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.avatar, only_path: true) 
    else
      ActionController::Base.helpers.asset_path('app/assets/avatar.jpg')
    end
   end

   def uniq_p
    object.posts.uniq
   end

  end
  