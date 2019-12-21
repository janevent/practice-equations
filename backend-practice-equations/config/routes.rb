Rails.application.routes.draw do
  devise_for :users
  #get 'users/name'
  #get 'users/password_digest'
#namespace :api do 
 # namespace :v1 do
  #  resources :users
  #end
#end
scope :api, defaults: { format: :json } do
  devise_for :users 
end
#defaults: { format: :json }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
