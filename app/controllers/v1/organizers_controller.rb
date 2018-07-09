module V1
  class OrganizersController < ApplicationController
    skip_before_action :authorize_request, only: :create
    before_action :set_organizer, only: [:show, :update, :destroy]
    
    def index
      @organizers = Organizer.all
      json_response(@organizers)
    end
    
    def create
      @organizer = Organizer.create!(organizer_params)
      auth_token = AuthenticateUser.new(organizer.email, organizer.password).call
      response = { message: Message.account_created, auth_token: auth_token }
      json_response(response, :created)
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
      params.require(:organizer).permit(
        :name, 
        :email, 
        :password, 
        :password_confirmation,
        :phone, 
        address_attributes: [
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
end
