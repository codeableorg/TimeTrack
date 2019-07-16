Rails.application.routes.draw do
  namespace :api do
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    resources :projects, :only => [:index]
    resources :histories, :only => [:index]
    resources :users, :only => [:index]
  end
end
