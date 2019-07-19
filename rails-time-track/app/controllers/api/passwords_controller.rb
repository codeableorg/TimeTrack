module Api
  class Api::PasswordsController < ApplicationController
    skip_before_action :require_login

    def reset
      if params[:email]
        user = User.find_by_email(params[:email])
        if user
          user.regenerate_and_timestamp_reset_token
          user.send_reset_password_email
          render json: { message: "Email sent successfully" }
        else
          render_errors("User not found with email given", :bad_request)  
        end
      else
        render_errors("You have to pass the parameter 'email'", :bad_request)
      end
    end

    def create
      if params[:token] && params[:password]
        user = User.find_by(reset_digest: params[:token])
        if user
          
          if user.reset_token_expired?
            render_errors("Expired token", :bad_request)  
          elsif params[:password].empty?
            render_errors("Password can't be empty", :bad_request)  
          elsif user.update_attributes(password: params[:password])
            render json: { message: "Password changed successfully" }
          else
            render_errors("Invalid password", :bad_request)  
          end

        else
          render_errors("User not found with token given", :bad_request)  
        end
      else
        render_errors("You have to pass the parameters 'token' and 'password'", :bad_request)
      end
    end

  end
end