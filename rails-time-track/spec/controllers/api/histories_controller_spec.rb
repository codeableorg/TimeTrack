require 'rails_helper'

RSpec.describe Api::HistoriesController, type: :controller do

  let!(:userOwner) do
    User.create(
      name: Faker::Name.name,
      email: "test1@dominio.com",
      password: "123456",
      role: "Owner",
      rate:1800
    )
  end

  let!(:user1) do
    User.create(
      name: Faker::Name.name,
      email: "test2@dominio.com",
      password: "123456",
      role: "Analyst",
      rate:1500
    )
  end

  let!(:user2) do
    User.create(
      name: Faker::Name.name,
      email: "test3@dominio.com",
      password: "123456",
      role: "Manager",
      rate:1500
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

  let!(:history1) do
    Project.create(
      name: "Project Space",
      client: "Frank",
      category: "Education",
      closed: true
    )
  end

  let!(:members1) do
    ProjectMember.create(
      user_id: user1.id,
      project_id: history1.id
    )
  end

  let!(:history2) do
    Project.create(
      name: "Time Tracker",
      client: "Frank",
      category: "Education",
      closed: true
    )
  end

  let!(:members2) do
    ProjectMember.create(
      user_id: user2.id,
      project_id: history2.id
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

    context "With logged in with a role Owner" do

      before do
        cookies.signed[:auth_token] = userOwner.token
      end

      it 'return http status ok' do
        get :index
        expect(response).to have_http_status(:ok)
      end

      it 'render json with closed projects' do
        get :index
        history = JSON.parse(response.body)
        expect(history.size).to eq 2
      end

    end

    context "With logged in with a role Analyst" do

      before do
        cookies.signed[:auth_token] = user1.token
      end

      it 'return http status unauthorized' do
        get :index
        expect(response).to have_http_status(:unauthorized)
      end

      it 'render json message with a specific error' do
        get :index
        expected_response = JSON.parse(response.body)["errors"]["message"];
        expect(expected_response).to eq("Access denied")
      end

    end

    context "With logged in with a role Manager" do

      before do
        cookies.signed[:auth_token] = user2.token
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