require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
    let!(:user) do
        @user1 = User.create(
            name: "juanito",
            email: "juanito@gmail.com",
            password: "123456",
            role: "Owner",
            rate: 10000
        )
    end

    describe 'GET #index' do
        context 'Without loggin in previously' do
            it "returns http success" do
                expect(response).to have_http_status(:success)
            end

            it 'return http status unauthorized by default' do
                get :index
                expect(response).to have_http_status(:unauthorized)
            end

            it 'return json warning message when user is not log in' do
                get :index
                expected_response = JSON.parse(response.body)['errors']['message']
                expect(expected_response).to eq('Access denied')
            end
        end

        context 'With logged in done previously' do
            before do
                cookies.signed[:auth_token] = user.token
            end

            it 'return http status ok' do
                get :index
                expect(response).to have_http_status(:ok)
            end

            it 'render json with all properties' do
                get :index
                users = JSON.parse(response.body)
                expect(users.size).to eq 1
                expect(users.first.keys).to match_array([
                    "id", 
                    "email", 
                    "name", 
                    "rate", 
                    "role"
                ])
            end
        end
    end

    describe 'POST #create' do
        before do
            cookies.signed[:auth_token] = user.token
        end

        it 'return http status bad request when you pass an incorrect email format' do
            post :create, params: {email:"test"},as: :json
            expect(response).to have_http_status(:unprocessable_entity)
        end

        it 'creates a new user' do
            post :create, params: {name: 'juanito3', email: 'juanito3@gmail.com', password: "123456"}, format: 'json'
            assert_response :success
            expected_response = JSON.parse(response.body)
            expect(expected_response["name"]).to eq('juanito3')
            expect(expected_response["email"]).to eq ('juanito3@gmail.com')
        end
        
    end

    describe 'PUT #update' do
        it 'returns http status unathorized when you 
            do not pass the token in header' do
            put :update, params: { id: "sadasdas"}
            expect(response).to have_http_status(:unauthorized)
        end

        it 'render json with a specify error message
            when you do not pass the token in header' do
            put :update, params: { id: "sadasdas"}
            expected_response = JSON.parse(response.body)
            expect(expected_response["errors"]["message"]).to eq("Access denied")
        end
    end
end