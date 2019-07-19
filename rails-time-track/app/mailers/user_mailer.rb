class UserMailer < ApplicationMailer
  default from: 'info@timetrack.com'

  def reset_password
    @user = params[:user]
    mail(to: @user.email, subject: "Password reset request")
  end
end
