Rails.application.routes.draw do
  #devise_for :users
  #get 'users/name'
  #get 'users/password_digest'
#namespace :api do 
 # namespace :v1 do
  #  resources :users
  #end
#end
#scope :api, defaults: { format: :json } do
  
 # devise_for :users, controllers: { sessions: :sessions },
  #                     path_names: { sign_in: :login }
  #resources :users, only: [:show, :update]
#end

  #devise_for :users
  namespace :v1 do 
    resources :sessions, only: [:create, :destroy]
  end

resources :games, only: [:show, :index, :create, :update]
#defaults: { format: :json }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
