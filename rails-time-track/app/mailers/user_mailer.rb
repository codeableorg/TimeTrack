class UserMailer < ApplicationMailer
  default from: 'info@timetrack.com'

  def reset_password
    p "Sending"
    @user = params[:user]
    p @user.email
    mail(to: @user.email, subject: "Password reset request")
  end
end
