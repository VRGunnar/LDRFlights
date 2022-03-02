source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.3'
gem 'bootsnap', require: false
gem 'fast_jsonapi'
gem 'jbuilder'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'rails', '~> 6.0.3.4'
gem 'react-rails'
gem 'redis', '~> 4.0'
gem 'redis-namespace'
gem 'sidekiq'
gem 'sprockets-rails', require: 'sprockets/railtie'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
gem 'webpacker'
group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'rails-controller-testing'
  gem 'rspec-rails', '~> 5.0.0'
end
group :development do
  gem 'guard-rspec', require: false
  gem 'letter_opener'
end
group :test do
  gem 'shoulda-matchers', '~> 5.0'
end
