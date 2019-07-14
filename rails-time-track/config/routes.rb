Rails.application.routes.draw do
  namespace :api do
    resources :projects, :only => [:index]
    resources :histories, :only => [:index]
    resources :users, :only => [:index]
  end
end
