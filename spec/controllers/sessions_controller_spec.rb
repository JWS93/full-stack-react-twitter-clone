require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  render_views

  describe 'POST api/sessions' do
    it 'renders new session object' do
      FactoryBot.create(:user, username: 'asdasdasd', password: 'asdasdasd')

      post :create, params: {
        user: {
          username: 'asdasdasd',
          password: 'asdasdasd'
        }
      }

      expect(response.body).to eq({
        success: true
      }.to_json)
    end
  end

  describe 'GET api/authenticated' do
    it 'renders authenticated user object' do
      user = FactoryBot.create(:user)
      session = user.sessions.create
      @request.cookie_jar.signed['twitter_session_token'] = session.token

      get :authenticated

      expect(response.body).to eq({
        authenticated: true,
        username: user.username
      }.to_json)
    end
  end

  describe 'DELETE api/sessions' do
    it 'renders success' do
      user = FactoryBot.create(:user)
      session = user.sessions.create
      @request.cookie_jar.signed['twitter_session_token'] = session.token

      delete :destroy

      expect(user.sessions.count).to be(0)
    end
  end
end