class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  
  # called before every action on controllers
  before_action :authorize_request
  attr_reader :current_user
end
