Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: 'visitors#index'
  devise_for :users
  resources :users
end
