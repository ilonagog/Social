# class MessageSerializer < ActiveModel::Serializer
#   attributes :id, :content, :sender_id, :receiver_id, :sender_name, :receiver_name
#   belongs_to :user
#   # belongs_to :sender, class_name: "User", foreign_key: "sender_id"
#   def sender_name
#     object.sender.name if object.sender
#   end
#   def receiver_name
#     object.receiver.name if object.receiver
#   end
#   # def image_url
#   #   Rails.application.routes.url_helpers.rails_blob_path(object.user.avatar, only_path: true) if object.user.avatar.attached?
#   # end

# end

class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :sender_id, :receiver_id, :sender_name, :receiver_name
  belongs_to :sender, class_name: "User", foreign_key: "sender_id"
  belongs_to :receiver, class_name: "User", foreign_key: "receiver_id"

  def sender_name
    object.sender.name if object.sender
  end

  def receiver_name
    object.receiver.name if object.receiver
  end
end
