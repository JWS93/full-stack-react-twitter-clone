class Tweet < ApplicationRecord
	belongs_to :user

  validates :user_id, presence: true
  validates :message, length: { maximum: 140 }, presence: true
end
