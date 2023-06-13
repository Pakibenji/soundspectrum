class PrivateController < ApplicationController
  before_action :authenticate_user!
  def user
    render json: {
      message: "Vous êtes bien connecté en tant que #{current_user.email}"}
  end
end
