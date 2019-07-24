Rails.application.routes.draw do
  namespace :api, defaults: {format: "json"} do
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    # post "/users" to "users#create"

    post "/change-password", to: "passwords#change"
    post "/reset-password", to: "passwords#reset"

    resources :projects, :only => [:index, :show]
    resources :weekly_project_reports, :only => [:show]
    resources :histories, :only => [:index]
    resources :users 
    # , :only => [:index, :create]
  end
end
