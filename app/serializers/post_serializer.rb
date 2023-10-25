class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :author,:user_id, :avatar
  belongs_to :user
  has_many :comments
  def image_url
    Rails.application.routes.url_helpers.rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
  def author
    # byebug
    object.user.name if object.user
  end
  def avatar
    Rails.application.routes.url_helpers.rails_blob_path(object.user.avatar, only_path: true) if object.user.avatar.attached?
  end
end
