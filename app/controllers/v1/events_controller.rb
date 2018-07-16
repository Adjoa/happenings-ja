module V1
  class EventsController < ApplicationController
    before_action :set_organizer_event, only: [:update, :destroy]
    before_action :set_event, only: [:show]
    
    def index
      @events = Event.all ||= current_user.events if current_user
      json_response(@events)
    end
    
    def create
      @event = current_user.events.create!(event_params)
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
      params.require(:event).permit(:name, :start_time, :end_time, :description, 
        address_attributes: [:line1, :line2, :city, :parish, :country])
    end
    
    def set_organizer_event
      @event = current_user.events.find_by!(id: params[:id]) if current_user
    end
    
    def set_event
      @event = Event.find(params[:id])
    end
  end
end