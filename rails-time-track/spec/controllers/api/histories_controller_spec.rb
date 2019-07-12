require 'rails_helper'

RSpec.describe Api::HistoriesController, type: :controller do

  before do
    @history =  Project.create(
      name: "Project Space",
      client: "Frank",
      category: "Education",
      closed: true
    )
  end

  describe 'GET index' do
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