require 'rails_helper'

RSpec.describe Api::ProjectMembersController, type: :controller do

  let!(:userAnalyst) do
    User.create(
      name: Faker::Name.name,
      email: "test1@dominio.com",
      password: "123456",
      role: "Analyst",
      rate:1800
    )
  end

  let!(:userManager) do
    User.create(
      name: Faker::Name.name,
      email: "test2@dominio.com",
      password: "123456",
      role: "Manager",
      rate:1800
    )
  end

  let!(:project1) do
    Project.create(
      name: "Project Rumi",
      client: "MINEDU",
      category: "Eduaction",
      closed: false
    )
  end

  let!(:project2) do
    Project.create(
      name: "Time Tracker",
      client: "CODEABLE",
      category: "Gestion",
      closed: false
    )
  end

  let!(:members1) do
    ProjectMember.create(
      user_id: userAnalyst.id,
      project_id: project1.id
    )

    ProjectMember.create(
      user_id: userManager.id,
      project_id: project1.id
    )
  end

  let!(:members2) do
    ProjectMember.create(
      user_id: userAnalyst.id,
      project_id: project2.id
    )
  end

  describe 'GET index' do

    context "Without logging in previously" do
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

    context "With logged in done previously" do
      before do
        cookies.signed[:auth_token] = userManager.token
      end

      it 'return http status ok' do
        get :index
        expect(response).to have_http_status(:ok)
      end

      it 'render json with all projects members of all projects' do
        get :index
        projects_members = JSON.parse(response.body)
        expect(projects_members.size).to eq 3
      end

      it 'return http status ok when user_id and project_id are passed' do
        get :index, params: { user_id: userManager.id, project_id:project1.id }
        expect(response).to have_http_status(:ok)
      end

      it 'render json with all projects members of a specific project' do
        get :index, params: { user_id: userManager.id, project_id:project1.id }
        projects_members = JSON.parse(response.body)
        expect(projects_members.size).to eq 1
      end
    end
  end

  describe 'GET report_detail' do

    context "Without logging in previously" do
      it 'return http status unauthorized when you did not log in before' do
        get :report_detail
        expect(response).to have_http_status(:unauthorized)
      end

      it 'return json message  when you did not log in before' do
        get :report_detail
        expected_response = JSON.parse(response.body)["errors"]["message"];
        expect(expected_response).to eq("Access denied")
      end

    end

    context "With logged in done previously" do
      before do
        cookies.signed[:auth_token] = userManager.token
      end

      it 'return http status ok' do
        get :report_detail, params: { user_id: userManager.id, project_id:project1.id }
        expect(response).to have_http_status(:ok)
      end

      it 'render json with info of the project and with extra attributes' do
        get :report_detail, params: { user_id: userManager.id, project_id:project1.id }
        projects_members = JSON.parse(response.body)
        expect(projects_members.keys.size).to eq(6)

        expect(projects_members.keys).to include("id")
        expect(projects_members.keys).to include("user_id")
        expect(projects_members.keys).to include("project_id")
        expect(projects_members.keys).to include("estimated_cost")
        expect(projects_members.keys).to include("real_cost")
        expect(projects_members.keys).to include("details")

        expect(projects_members["details"].size).to eq(0)
      end
    end
  end

end