class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    has_one_attached :avatar
    has_many :messages, foreign_key: :sender_id, class_name: 'Message'
    has_many :sent_messages, class_name: 'Message', foreign_key: 'sender_id'
    has_many :received_messages, class_name: 'Message', foreign_key: 'receiver_id'
 

    validates :username, presence: true
    # validates :password, presence: true
    validates :name, presence: true
    validates :bio, presence: true
    validates :email, presence: true, format: { 
        with: /\A[\w+\-.]+@[\w\-.]+\.com\z/i, message: "is not a valid email address" 
    }
    has_secure_password
    
    validates :avatar, presence: true
    validates :username, uniqueness: true, presence: true
    validates :email, presence: true, uniqueness: true
    PASSWORD_REQUIREMENTS = /\A
        (?=.{8,}) #at least 8 characters log
        (?=.*\d) #contains at least one number
        (?=.*[a-z])# contains at least one lower case
        (?=.*[A-Z]) #contains at least one uppercase letter
        (?=.*[[:^alnum:]]) #contains at least one symbol
    /x
    validates :password, format: {with: PASSWORD_REQUIREMENTS}
end



