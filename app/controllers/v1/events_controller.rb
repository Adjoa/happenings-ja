module V1
  class EventsController < ApplicationController
    before_action :set_event, only: [:show, :update, :destroy]
    
    def index
      @events = Event.all
      json_response(@events)
    end
    
    def create
      @event = Event.create!(event_params)
      json_response(@event, :created)
    end
    
    def show
      json_response(@event)
    end
    
    def update
      @event.update
      head :no_content
    end
    
    def destroy
      @event.destroy
      head :no_content
    end
    
    private
    
    def event_params
      params.require(:event).permit(:organizer_id, :name, :start_time, :end_time, :description, 
        address_attributes: [:line1, :line2, :city, :parish, :country])
    end
    
    def set_event
      @event = Event.find(params[:id])
    end
  end
end