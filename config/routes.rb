Rails.application.routes.draw do
  get '/users/topnews' => 'users#topnews'
  get '/users/wired' => 'users#wired'
  resources :users

end
