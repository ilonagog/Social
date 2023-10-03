class Post < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    validates :title, :image, presence: true
end
