class CsvMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def csv_email
    file = File.read('support/test_file.csv')
    attachments['generated_file.csv'] = file
    user = 'gunnarvanremoortere@hotmail.com'
    mail(to: user, subject: 'This is a test :)')
  end
end
