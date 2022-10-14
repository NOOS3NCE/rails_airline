class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :ariline_id
end
