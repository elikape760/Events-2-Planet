class User < ApplicationRecord
    has_many :events, dependent: :destroy
    has_many :comments, through: :events

    has_secure_password

    # validates :first_name, presence: true, uniqueness: true
    # validates :last_name, presence: true, uniqueness: true 
end
