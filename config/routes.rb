Rails.application.routes.draw do
  get 'private/user'

  devise_for :users, 
    path: '', 
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup',
      
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations',
    }
    
    authenticate :user, ->(user) { user.role == "admin" } do 
      mount Avo::Engine => Avo.configuration.root_path 
      
    end
end