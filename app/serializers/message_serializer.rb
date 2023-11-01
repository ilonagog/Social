class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :sender_id, :receiver_id, :sender_name, :receiver_name,  :created_at

  # belongs_to :sender, class_name: "User", foreign_key: "sender_id"
  # belongs_to :receiver, class_name: "User", foreign_key: "receiver_id"

  def sender_name
    object.sender.name if object.sender
  end

  def receiver_name
    object.receiver.name if object.receiver
  end

  def created_at
    object.created_at
  end

end

# def messages
#   messages = Message.where(sender_id: object.sender_id, receiver_id: object.receiver_id)
#   messages += Message.where(sender_id: object.receiver_id, receiver_id: object.sender_id)
#   messages.uniq
# end

# class MessageSerializer < ActiveModel::Serializer
#   attributes :id, :content, :sender_id, :receiver_id, :sender_name, :receiver_name, :all_messages
#   # belongs_to :user
#   belongs_to :sender, class_name: "User", foreign_key: "sender_id"
#   belongs_to :receiver, class_name: "User", foreign_key: "receiver_id"
#   def sender_name
#     object.sender.name if object.sender
#   end
#   def receiver_name
#     object.receiver.name if object.receiver
#   end

#    def all_messages
#   messages= []
#   messages << object.sender.messages
#   # messages << object.receiver.messages
#   messages.flatten
#  end
#   # def image_url
#   #   Rails.application.routes.url_helpers.rails_blob_path(object.user.avatar, only_path: true) if object.user.avatar.attached?
#   # end

# end

# class MessageSerializer < ActiveModel::Serializer
#   attributes :id, :content, :sender_id, :receiver_id, :sender_name, :receiver_name
#   belongs_to :sender, class_name: "User", foreign_key: "sender_id"
#   belongs_to :receiver, class_name: "User", foreign_key: "receiver_id"

#   def sender_name
#     object.sender.name if object.sender
#   end

#   def receiver_name
#     object.receiver.name if object.receiver
#   end
# #  def all_messages
# #   messages= []
# #   messages << object.sender.messages
# #   # messages << object.receiver.messages
# #   messages.flatten
# #  end

# end
