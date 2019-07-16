class SessionController < ApplicationController
  skip_before_action :require_login, only: :create

  def create
    user = User.valid_login?(params[:email], params[:password])
    if user
      regenerate_and_signed_token(user)
      render json: user
    else
      render json: { errors: "Incorrect email or password" },
             status: :bad_request
    end
  end

  def destroy
    current_user.invalidate_token
    cookies.delete :auth_token
    head :ok
  end
end