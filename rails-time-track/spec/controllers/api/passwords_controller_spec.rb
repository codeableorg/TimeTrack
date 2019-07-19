require 'rails_helper'

RSpec.describe Api::PasswordsController, type: :controller do
  
  let!(:user) do
    User.create(
      name: Faker::Name.name,
      email: "test@dominio.com",
      password: "123456",
      role: "Owner",
      rate:1800
    )
  end

  describe 'POST change' do
    it 'return http status bad request when you do not pass email parameter' do
      post :change
      expect(response).to have_http_status(:bad_request)
    end

    it 'return json with a error message when you do not pass parameters' do
      post :change
      expected_response = JSON.parse(response.body)["errors"]["message"];
      expect(expected_response).to eq("You have to pass the parameter 'email'")
    end

    it 'return http status bad request when you pass an email or password incorrect' do
      post :change, params: {email:"test@test.com"},as: :json
      expect(response).to have_http_status(:bad_request)
    end

    it 'return json with a error message when you pass an email or password incorrect' do
      post :change, params: {email:"test@test.com"},as: :json
      expected_response = JSON.parse(response.body)["errors"]["message"];
      expect(expected_response).to eq("User not found with email given")
    end

    it 'return http status ok when you pass an email and password correct' do
      post :change, params: {email:user.email},as: :json
      expect(response).to have_http_status(:ok)
    end

    it 'return json with attributes id, email and name' do
      post :change, params: {email:user.email},as: :json
      expected_response = JSON.parse(response.body);
      expect(expected_response["message"]).to eq("Email sent successfully")
    end
  end

  describe 'POST reset' do
    context "Reset token generated" do
      before do
        user.regenerate_and_timestamp_reset_token
      end

      it 'return http status bad request when you do not pass parameters' do
        post :reset
        expect(response).to have_http_status(:bad_request)
      end

      it 'return json with a error message when you do not pass parameters' do
        post :reset
        expected_response = JSON.parse(response.body)["errors"]["message"];
        expect(expected_response).to eq("You have to pass the parameters 'token' and 'password'")
      end

      it 'return http status bad request when you pass all parameters but the token is incorrect' do
        post :reset, params: {token:"test1",password: "test2"},as: :json
        expect(response).to have_http_status(:bad_request)
      end

      it 'return json with error message when you pass all parameters but the token is incorrect' do
        post :reset, params: {token:"test1",password: "test2"},as: :json
        expected_response = JSON.parse(response.body)["errors"]["message"];
        expect(expected_response).to eq("User not found with token given")
      end

      it 'return http status bad request when you pass all parameters but the password is empty' do
        post :reset, params: {token:user.reset_digest,password: ""},as: :json
        expect(response).to have_http_status(:bad_request)
      end

      it 'return json with a error message when you pass all parameters but the password is empty' do
        post :reset, params: {token:user.reset_digest,password: ""},as: :json
        expected_response = JSON.parse(response.body)["errors"]["message"];
        expect(expected_response).to eq("Password can't be empty")
      end

      it 'return http status bad request when you pass all parameters but the token is expired' do
        user.update_attribute(:reset_created_at,2.hours.ago)
        post :reset, params: {token:user.reset_digest,password: "test123"},as: :json
        expect(response).to have_http_status(:bad_request)
      end

      it 'return json with a error message when you pass all parameters but the password is empty' do
        user.update_attribute(:reset_created_at,2.hours.ago)
        post :reset, params: {token:user.reset_digest,password: "test123"},as: :json
        expected_response = JSON.parse(response.body)["errors"]["message"];
        expect(expected_response).to eq("Token expired")
      end

      it 'return http status ok when you pass an email and password correct' do
        post :reset, params: {token:user.reset_digest,password: "test123"},as: :json
        expect(response).to have_http_status(:ok)
      end

      it 'return json with attributes id, email and name' do
        post :reset, params: {token:user.reset_digest,password: "test123"},as: :json
        expected_response = JSON.parse(response.body);
        expect(expected_response["message"]).to eq("Password changed successfully")
      end
    end
  end
end