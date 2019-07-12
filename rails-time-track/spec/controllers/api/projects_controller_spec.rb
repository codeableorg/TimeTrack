require 'rails_helper'

RSpec.describe Api::ProjectsController, type: :controller do

  before do
    @projects = Project.create(
      name: "Project Rumi",
      client: "MINEDU",
      category: "Eduaction",
      closed: false
    )
    @histories = Project.create(
      name: "Project Rumi",
      client: "MINEDU",
      category: "Eduaction",
      closed: true
    )
  end

  describe 'GET index' do
    it 'return http status ok' do
      get :index
      expect(response).to have_http_status(:ok)
    end
    it 'render json with all projects' do
      get :index
      projects = JSON.parse(response.body)
      expect(projects.size).to eq 1
    end
  end

end