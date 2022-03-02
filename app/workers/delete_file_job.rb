class DeleteFileJob
  include Sidekiq::Worker

  def perform(*_args)
    FileUtils.rm_r(Dir.glob('tmp/letter_opener/*'))
  end
end
