Rails.application.routes.draw do
  
  # resources :messages, only: [:index, :create]
  get '/messages', to: 'messages#index'
  post '/messages', to: 'messages#create'

  resources :comments
  resources :posts  do
    resources :comments, only: [:create]
  end
  resources :users, only: [:index, :update] do
    resources :messages, only: [:create]
   
  end
  
  get '/users/:id/messages', to: 'users#user_messages' 
  

  get "/chat", to: "messages#chat"
  # get "users/:id/messages", to: "users#"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
