require 'rails_helper'

RSpec.describe Airline, type: :model do
  subject do
    described_class.new(name: 'anything',
                        image_url: 'http://anything',
                        slug: 'anything')
  end

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end
  it 'is not valid without a name of minimum 5 characters' do
    subject.name = nil
    expect(subject).to_not be_valid
    subject.name = 'e'
    expect(subject).to_not be_valid
    subject.name = 'test-airlines'
    expect(subject).to be_valid
  end
  it 'is not valid without a image_url of minimum 15 characters' do
    subject.image_url = nil
    expect(subject).to_not be_valid
    subject.image_url = 'https://i'
    expect(subject).to_not be_valid
    subject.image_url = 'https://www.valid_url_of_an_airline'
    expect(subject).to be_valid
  end
  it 'is not valid without a slug of minimum 5 characters' do
    subject.slug = nil
    expect(subject).to_not be_valid
    subject.slug = 's'
    expect(subject).to_not be_valid
    subject.slug = 'FR2973'
    expect(subject).to be_valid
  end

  describe 'associations' do
    it { should have_many(:reviews) }
  end

  describe 'slugify' do
    it 'should parameterize name and save it into slug' do
      subject.name = 'test Airline'
      subject.slugify
      expect(subject.slug).to eq('test-airline')
    end
  end

  describe 'avg_score' do
    it 'should return 0 if there is no score set yet' do
      airline = create(:airline)
      expect(airline.avg_score).to eq(0)
    end
  end

  describe 'avg_score' do
    it 'should return 3.00 when there is set a review of 3' do
      airline = create(:airline)
      review = create(:review, airline: airline)
      expect(airline.avg_score).to eq(3.00)
    end
  end
end
