Rails.application.routes.draw do
  namespace :api, defaults: {format: "json"} do
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    # post "/users" to "users#create"

    post "/change-password", to: "passwords#change"
    post "/reset-password", to: "passwords#reset"

    resources :projects, :only => [:index, :show, :create]
    resources :weekly_project_reports, :only => [:show]
    resources :daily_logs, :only => [:index, :create]
    resources :histories, :only => [:index]
    resources :users do
      resources :projects, :only => [:index]
      post "availableTime", action: "availableTime", on: :collection
    end
    resources :project_members, :only => [:index]
  end
end
