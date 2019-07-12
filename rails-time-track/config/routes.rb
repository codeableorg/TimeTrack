Rails.application.routes.draw do
  namespace :api do
    resources :projects, :only => [:index]
  end
end
