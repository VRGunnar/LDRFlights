FactoryBot.define do
  factory :review do
    title { 'The review title' }
    description { 'The review description' }
    score { 3 }
    airline { }
  end
end
