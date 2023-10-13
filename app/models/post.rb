class Post < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    has_one_attached :image
    validates :title, :image, presence: true
end
