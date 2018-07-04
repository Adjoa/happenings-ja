class OrganizersController < ApplicationController
  before_action :set_organizer, only: [:show, :update, :destroy]
  
  def index
    @organizers = Organizer.all
    json_response(@organizers)
  end
  
  def create
    @organizer = Organizer.create!(organizer_params)
    json_response(@organizer, :created)
  end
  
  def show
    json_response(@organizer)
  end
  
  def update
    @organizer.update(organizer_params)
    head :no_content
  end
  
  def destroy
    @organizer.destroy
    head :no_content
  end
  
  private
  
  def organizer_params
    params.permit(:name, :email, :phone, 
      addresses_attributes: [
        :line1,
        :line2,
        :city,
        :parish,
        :country
      ]
    )
  end
  
  def set_organizer
    @organizer = Organizer.find(params[:id])
  end

end
