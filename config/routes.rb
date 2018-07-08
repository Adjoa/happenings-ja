Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'organizers#create'
  
  resources :events, only: [:index, :show]
  resources :organizers, except: [:new, :edit] do
    resources :events, except: [:index, :show, :new, :edit]
  end
end
