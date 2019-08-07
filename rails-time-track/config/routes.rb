Rails.application.routes.draw do
  namespace :api, defaults: {format: "json"} do
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    post "/change_password", to: "passwords#change"
    post "/reset_password", to: "passwords#reset"

    resources :projects, :only => [:index, :show, :create] do
      get 'my_projects', action: 'my_projects', on: :collection
      put "/close", to: "projects#close"
    end
    
    resources :weekly_project_reports, :only => [:show]
    resources :daily_logs, :only => [:index, :create]
    resources :histories, :only => [:index]
    resources :users do
      resources :projects, :only => [:index]
      post "available_time", action: "available_time", on: :collection
      put "update_state", action: "update_state", on: :member
    end
    resources :project_members, :only => [:index] do
      get "report_detail", action: "report_detail", on: :collection
    end
  end
end
