require 'rails_helper'

RSpec.describe Api::DailyLogsController, type: :controller do

  let!(:user) do
    User.create(
      name: Faker::Name.name,
      email: "test@dominio.com",
      password: "123456",
      role: "Owner",
      rate: 1800
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

  let!(:project_member) do
    ProjectMember.create(
      estimated_cost: 540000,
      real_cost: 0
    )
  end

  let!(:daily_logs) do
    DailyLog.create(
      date: "2019-08-01",
      amount: 1800
    )
  end

  describe 'GET index' do
    context "Without logged in previously" do
      it 'return http status unauthorized when not logged' do
        get :index
        expect(response).to have_http_status(:unauthorized)
      end

      it 'return json message when not logged in' do
        get :index
        expected_response = JSON.parse(response.body)["errors"]["message"];
        expect(expected_response).to eq("Access denied")
      end

    end

    context "With login" do
      
      before do
        cookies.signed[:auth_token] = user.token
      end

      it 'return http status ok' do
        get :index
        expect(response).to have_http_status(:ok)
      end

    end
  end
  
end