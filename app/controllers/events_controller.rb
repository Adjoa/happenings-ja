class EventsController < ApplicationController
  before_action :set_organizer, only: [:create, :update, :destroy]
  before_action :set_organizer_event, only: [:create, :update, :destroy]
  before_action :set_event, only: [:show]
  
  def index
    @events = Event.all
    json_response(@events)
  end
  
  def create
    @event = @organizer.events.create!(event_params)
    json_response(@event, :created)
  end
  
  def show
    json_response(@event)
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
  
  def set_organizer
    @organizer = Organizer.find(params[:organizer_id])
  end
  
  def set_organizer_event
    @event = @organizer.events.find_by!(id: params[:id]) if @organizer
  end
  
  def set_event
    @event = Event.find(params[:id])
  end
  
end