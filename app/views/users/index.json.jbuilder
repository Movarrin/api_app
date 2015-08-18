json.array!(@users) do |user|
  json.extract! user, :id, :username, :password_digest, :nytimes, :npr, :weather, :sports, :twitter
  json.url user_url(user, format: :json)
end
