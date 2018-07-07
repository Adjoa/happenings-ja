class EventsController < ApplicationController
  
  def index
  end
  
  def create
  end
  
  def show
  end
  
  def update
  end
  
  def destroy
  end
  
  private
  
  def event_params
    params.require(:event).permit(:name, :start_time, :end_time, :description, :contact_email, :contact_phone, :website, 
    address_attributes: [
        :line1,
        :line2,
        :city,
        :parish,
        :country
      ]
    )
  end
  
  
  
end