class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :sender_id, :receiver_id, :sender_name, :receiver_name,  :created_at

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
