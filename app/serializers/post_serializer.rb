class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :user_name,:user_id
  belongs_to :user
  has_many :comments
  def image_url
    Rails.application.routes.url_helpers.rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
  def user_name
    # byebug
    object.user.name if object.user
  end
end
