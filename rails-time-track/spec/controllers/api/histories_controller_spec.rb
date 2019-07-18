require 'rails_helper'

RSpec.describe Api::HistoriesController, type: :controller do

  let!(:user) do
    User.create(
      name: Faker::Name.name,
      email: "test@dominio.com",
      password: "123456",
      role: "Owner",
      rate:1800
    )
  end

  let!(:project) do
    Project.create(
      name: "Project Space",
      client: "Frank",
      category: "Education",
      closed: false
    )
  end

  let!(:history) do
    Project.create(
      name: "Project Space",
      client: "Frank",
      category: "Education",
      closed: true
    )
  end

  describe 'GET index' do
    context "Without logged in previously" do
      it 'return http status unauthorized when you did not log in before' do
        get :index
        expect(response).to have_http_status(:unauthorized)
      end

      it 'return json message  when you did not log in before' do
        get :index
        expected_response = JSON.parse(response.body)["errors"]["message"];
        expect(expected_response).to eq("Access denied")
      end

    end

    context "With logged in" do

      before do
        cookies.signed[:auth_token] = user.token
      end

      it 'return http status ok' do
        get :index
        expect(response).to have_http_status(:ok)
      end

      it 'render json with closed projects' do
        get :index
        history = JSON.parse(response.body)
        expect(history.size).to eq 1
      end

    end
  end

end