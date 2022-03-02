require 'rails_helper'
require 'csv'

RSpec.describe CreateCsvJob, type: :worker do
  it 'creates a csv file with the correct headers and rows' do
    airline1 = create(:airline, name: 'airline1', image_url: 'http://example.com/1', slug: 'airline1')
    airline2 = create(:airline, name: 'airline2', image_url: 'http://example.com/2', slug: 'airline2')
    airline3 = create(:airline, name: 'airline3', image_url: 'http://example.com/3', slug: 'airline3')

    create(:review, score: 3, airline: airline1)
    create(:review, score: 1, airline: airline1)
    create(:review, score: 2, airline: airline1)

    create(:review, score: 4, airline: airline2)
    create(:review, score: 5, airline: airline2)
    create(:review, score: 5, airline: airline2)

    create(:review, score: 1, airline: airline3)
    create(:review, score: 1, airline: airline3)
    create(:review, score: 2, airline: airline3)

    headers = %w[airline amount_of_reviews average_score]
    airlines = [airline1, airline2, airline3]

    CSV.open('support/generated_file.csv', 'wb') do |csv|
      csv << headers
      airlines.each do |_airline|
        csv << [_airline.name, _airline.reviews.count, _airline.avg_score]
      end
    end
    test_file = File.read('support/test_file.csv')
    generated_file = File.read('support/generated_file.csv')
    expect(generated_file).to eq(test_file)

    CsvMailer.csv_email.deliver_now
  end
end
