class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content
  # belongs_to :user

  # def avatar
  #   object.user.avatar
  # end

  # belongs_to :sender, class_name: "User"
  # belongs_to :receiver, class_name: "User"
end
