Rails.application.routes.draw do
  root 'home#index'

  get '/apply', to: 'home#apply'

  get '/appeal', to: 'home#appeal'

  get '/bma-appeal', to: 'home#bma'

  get '/knowledge-role-application', to: 'home#knowledge-role-application'

  get '/weather', to: 'home#weather'

  get '/weather-tos', to: 'home#weathertos'

  get '/weather-pp', to: 'home#weatherpp'

  get '/weather404', to: 'home#weather404'

  get '/404', to: 'errors#not_found'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
