class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url
  has_many :comments
  def image_url
    Rails.application.routes.url_helpers.rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
