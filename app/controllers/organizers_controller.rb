class OrganizersController < ApplicationController
  
  def index
    @organizers = Organizer.all
    render json: @organizers, status: 200
  end
  
  private
  
  def organizer_params
    params.require(:organizer).permit(:name, :email, :phone, 
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
