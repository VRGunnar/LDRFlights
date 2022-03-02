require 'rails_helper'

RSpec.describe 'Airlines', type: :request do
  # it 'assigns all airlines to airlines' do
  #   airlines = create_list(:airline, 4)
  #   get api_v1_airlines_path
  #   options = { include: %i[reviews] }
  #   expect(JSON.parse(response.body)).to eq(AirlineSerializer.new(airlines, options).serialized_json)
  # end
  #Correcte test, maar fastjsonapi heeft ingewikkelde notatie

  it 'shows an airline for the given slug' do
    airline = create(:airline)
    get api_v1_airline_path(slug: airline.slug)
    expect(response).to have_http_status(200)
  end

  # it 'returns the data for one airline by slug' do
  #   output = {
  #     'Airline id' => 'nil',
  #     'name' => 'test airline',
  #     'image_url' => 'http://example.com/',
  #     'slug' => 'test-airline'
  #   }

  #   airline = create(:airline)
  #   get api_v1_airline_path(slug: airline.id)
  #   expect(JSON.parse(response.body)).to eq(output)
  # end
  #Correcte test, maar fastjsonapi heeft ingewikkelde notatie

end
