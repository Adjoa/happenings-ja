class OrganizersController < ApplicationController
  
  def index
    @organizers = Organizer.all
    render json: @organizers, status: 200
  end

end
