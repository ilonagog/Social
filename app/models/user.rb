class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    has_one_attached :avatar
    has_many :messages, foreign_key: :sender_id, class_name: 'Message'
    has_many :sent_messages, class_name: 'Message', foreign_key: 'sender_id'
    has_many :received_messages, class_name: 'Message', foreign_key: 'receiver_id'
    # validates :password, presence: true
    # validates :username, uniqueness: true, presence: true
    # validates :email, presence: true, uniqueness: true
 
    has_secure_password

    # validates :username, presence: true
    # validates :bio, presence: true
    # validates :email, presence: true, format: { 
      #     with: /\A[\w+\-.]+@[\w\-.]+\.com\z/i, message: "is not a valid email address" 
      # }
    validates :name, presence: true, uniqueness: { case_sensitive: false }, on: :create
    validates :username, presence: true, uniqueness: { case_sensitive: false }, on: :create
    validates :email, presence: true, uniqueness: { case_sensitive: false }, on: :create
    validates :username, uniqueness: { case_sensitive: false }, on: :update
    validates :email, uniqueness: { case_sensitive: false }, on: :update
    validates :avatar, presence: true
    
    PASSWORD_REQUIREMENTS = /\A
    (?=.{8,})         # at least 8 characters long
    (?=.*\d)          # contains at least one number
    (?=.*[a-z])       # contains at least one lowercase letter
    (?=.*[A-Z])       # contains at least one uppercase letter
    (?=.*[[:^alnum:]]) # contains at least one symbol
    /x
    
    validates :password, format: { with: PASSWORD_REQUIREMENTS, message: "is invalid. It must have at least 8 characters, one number, one lowercase letter, one uppercase letter, and one symbol" },  allow_nil: true
    
    
  end
  
  # PASSWORD_REQUIREMENTS = /\A
  #     (?=.{8,}) #at least 8 characters log
  #     (?=.*\d) #contains at least one number
  #     (?=.*[a-z])# contains at least one lower case
  #     (?=.*[A-Z]) #contains at least one uppercase letter
  #     (?=.*[[:^alnum:]]) #contains at least one symbol
  # /x
  # validates :password, format: {with: PASSWORD_REQUIREMENTS}


