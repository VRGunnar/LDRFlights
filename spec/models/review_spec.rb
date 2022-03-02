require 'rails_helper'

RSpec.describe Review, type: :model do
  describe 'associations' do
    it { should belong_to(:airline) }
  end

  describe 'validations' do
    it { should validate_presence_of(:airline) }
  end

  current_airline = Airline.find_or_create_by(name: 'test-airline', image_url: 'http://example.com', slug: 'example_slug')

  it 'has a title with at least 2 characters long' do
    review = Review.new(
      title: '',
      description: 'This is a valid body',
      score: 2,
      airline: current_airline
    )

    expect(review).to_not be_valid
    review.title = 'T'
    expect(review).to_not be_valid
    review.title = 'Now it has a good title!'
    expect(review).to be_valid
  end

  it 'has a description with at least 15 characters long' do
    review = Review.new(
      title: 'This is an amazing title!',
      description: '',
      score: 2,
      airline: current_airline
    )

    expect(review).to_not be_valid
    review.description = 'D'
    expect(review).to_not be_valid
    review.description = 'A proper description you were saying?'
    expect(review).to be_valid
  end

  it 'has a score that ranges between number 0 and 5' do
    review = Review.new(
      title: 'This is an amazing title!',
      description: 'This is an amazing description!',
      score: nil,
      airline: current_airline
    )

    expect(review).to_not be_valid
    review.score = -1
    expect(review).to_not be_valid
    review.score = 6
    expect(review).to_not be_valid
    review.score = 4
    expect(review).to be_valid
    expect(review.score).to be_a(Integer)
  end
end
