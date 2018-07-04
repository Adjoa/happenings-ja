Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :events, only: [:index, :show]
  
  resources :organizers, except: [:new, :edit] do
    resources :events, except: [:index, :show, :new, :edit]
  end
end
