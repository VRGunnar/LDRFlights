FactoryBot.define do
  factory :airline do
    name { 'test airline' }
    image_url { 'http://example.com/' }
    slug { 'test slug' }
  end
end
