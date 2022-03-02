class Airline < ApplicationRecord
  validates :name, :slug, presence: true, length: { minimum: 5 }
  validates :image_url, presence: true, length: { minimum: 15 }

  has_many :reviews

  before_create :slugify

  def slugify
    self.slug = name.parameterize
    # parameterize zorgt ervoor dat strings worden omgezet in kleine letters en spaties naar een -
  end

  def avg_score
    return 0 unless reviews.count.positive?

    reviews.average(:score).round(2).to_f
  end
end
