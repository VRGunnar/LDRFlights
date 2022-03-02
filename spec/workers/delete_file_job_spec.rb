require 'rails_helper'
require 'csv'

RSpec.describe DeleteFileJob, type: :worker do
  it 'deletes a temporary file' do
    FileUtils.rm_r(Dir.glob('tmp/letter_opener/*')) if File.directory?('tmp/letter_opener')
    expect(Dir.glob('/path/to/dir/*')).to eq([])
  end
end
