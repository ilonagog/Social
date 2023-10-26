# class Message < ApplicationRecord
#     belongs_to :user, foreign_key: "sender_id"
#     belongs_to :user, foreign_key: "receiver_id"
#  end
  
class Message < ApplicationRecord
    validates :content, presence: true
    belongs_to :sender, class_name: "User", foreign_key: "sender_id"
    belongs_to :receiver, class_name: "User", foreign_key: "receiver_id"
end
  
#  def self.messages
#     self.all.map do |message|
#         {
#             id: message.id,
#             content: message.content,
#             user: message.user.name
#         }
#     end
#  end