Rails.application.routes.draw do
  root 'home#index'

  get '/apply', to: 'home#apply'

  get 'appeal', to: 'home#appeal'

  get '/404', to: 'errors#not_found'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
