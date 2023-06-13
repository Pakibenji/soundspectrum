RailsAdmin.config do |config|
  config.asset_source = :sprockets

  ### Popular gems integration

  ## == Devise ==

  ## == CancanCan ==
  # config.authorize_with :cancancan
  config.authenticate_with do
    # this is a rails controller helper
    authenticate_or_request_with_http_basic('Login required') do |username, password|
  
      # Here we're checking for username & password provided with basic auth
      resource = User.find_by(email: username)
  
      # we're using devise helpers to verify password and sign in the user 
      if resource.valid_password?(password) && resource.role == "admin"
        sign_in :admin, resource
      end
    end
  end
  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/railsadminteam/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
