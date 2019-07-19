Rails.application.routes.draw do
  namespace :api do
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    post "/reset", to: "passwords#reset"
    post "/create-password", to: "passwords#create"

    resources :projects, :only => [:index]
    resources :histories, :only => [:index]
    resources :users, :only => [:index]
  end
end
