require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  render_views

  describe 'POST api/users' do
    it 'renders new user object' do
      post :create, params: {
        user: {
          email: 'test@test.com',
          password: 'asdasdasd',
          username: 'test'
        }
      }

      expect(response.body).to eq({
        user: {
          username: 'test',
          email: 'test@test.com'
        }
      }.to_json)
    end
  end
end
