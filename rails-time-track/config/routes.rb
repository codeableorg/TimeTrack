Rails.application.routes.draw do
  namespace :api do
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    post "/change-password", to: "passwords#change"
    post "/reset-password", to: "passwords#reset"

    resources :projects, :only => [:index]
    resources :histories, :only => [:index]
    resources :users, :only => [:index]
  end
end
