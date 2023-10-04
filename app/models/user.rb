class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    validates :username, uniqueness: true, presence: true
    validates :email, presence: true
    validates :password, presence: true
    validates :name, presence: true
    validates :avatar, presence: true
    validates :bio, presence: true

    has_secure_password

    # PASSWORD_REQUIREMENTS = /\A
    #     (?=.{8,}) #at least 8 characters log
    #     (?=.*\d) #contains at least one number
    #     (?=.*[a-z])# contains at least one lower case
    #     (?=.*[A-Z]) #contains at least one uppercase letter
    #     (?=.*[[:^alnum:]]) #contains at least one symbol
    # /x
    # validates :password, format: {with: PASSWORD_REQUIREMENTS}
    # validates :email, presence: true, format: { 
    #     with: /\A[\w+\-.]+@[\w\-.]+\.com\z/i, message: "is not a valid email address" 
    # }
end
