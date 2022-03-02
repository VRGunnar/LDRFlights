require 'csv'

class CreateCsvJob
  include Sidekiq::Worker

  def perform(*_args)
    headers = %w[airline amount_of_reviews average_score]
    airlines = Airline.all
    CSV.open('support/generated_file.csv', 'wb') do |csv|
      csv << headers
      airlines.each do |_airline|
        csv << [_airline.name, _airline.reviews.count, _airline.avg_score]
      end
    end

    CsvMailer.csv_email.deliver
    DeleteFileJob.perform_in(5.minutes)
  end
end
