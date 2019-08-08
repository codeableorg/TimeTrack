module Api
  class Api::SessionsController < ApplicationController
    skip_before_action :require_login, only: :create

    def create
      if params.has_key?("email") && params.has_key?("password")
        user = User.valid_login?(params[:email], params[:password])

        if user
          if user.isActive
            regenerate_and_signed_token(user)
            render json: user
          else
            render_errors("Access is denied", :forbidden)
          end
        else
          render_errors("Incorrect email or password", :bad_request)
        end
      else
        render_errors("You have to pass the parameters 'email' and 'password'", :bad_request)
      end
    end

    def destroy
      # current_user.invalidate_token
      cookies.delete :auth_token
      head :ok
    end
  end
end