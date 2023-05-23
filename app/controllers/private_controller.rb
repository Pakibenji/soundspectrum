class PrivateController < ApplicationController
  before_action :authenticate_user!
  def user
    render json: {
      message: "You have successfully logged in"}
  end
end
