require 'rails_helper'

RSpec.describe 'Route definition', :type => :routing do
  it 'of POST api/users' do
    expect(:post => 'api/users').to route_to(:controller => 'api/users', :action => 'create')
  end

  it 'of POST api/sessions' do
    expect(:post => 'api/sessions').to route_to(:controller => 'api/sessions', :action => 'create')
  end

  it 'of GET api/authenticated' do
    expect(:get => 'api/authenticated').to route_to(:controller => 'api/sessions', :action => 'authenticated')
  end

  it 'of DELETE api/sessions' do
    expect(:delete => 'api/sessions').to route_to(:controller => 'api/sessions', :action => 'destroy')
  end

  it 'of POST api/tweets' do
    expect(:post => 'api/tweets').to route_to(:controller => 'api/tweets', :action => 'create')
  end

  it 'of GET api/tweets' do
    expect(:get => 'api/tweets').to route_to(:controller => 'api/tweets', :action => 'index')
  end

  it 'of DELETE api/tweets/:id' do
    expect(:delete => 'api/tweets/:id').to route_to(:controller => 'api/tweets', :action => 'destroy', :id => ':id')
  end

  it 'of GET api/users/:username/tweets' do
    expect(:get => 'api/users/:username/tweets').to route_to(:controller => 'api/tweets', :action => 'index_by_user', :username => ':username')
  end
end
