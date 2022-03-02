class Review < ApplicationRecord
  belongs_to :airline, class_name: 'Airline'
  validates_presence_of :airline
  validates :title, presence: true, length: { minimum: 5 }
  validates :description, presence: true, length: { minimum: 15 }
  validates :score, presence: true,
                    numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
end
