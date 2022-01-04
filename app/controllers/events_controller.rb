class EventsController < ApplicationController
    before_action :find_event, only: [:show, :update, :destroy]
    before_action :authorize, only: [:destroy]

    def index
        events = Event.all
        render json: events, status: :ok
    end

    def show
        render json: @event, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created 
    end

    def update
        @event.update!(event_params)
        render json: @event, status: :ok
    end

    def destroy
        @event.destroy
        head :no_content
    end

private

    def find_event
        @event = Event.find(params[:id])
    end

    def event_params
        params.permit(:name, :date, :time, :location, :description, :user_id, :comment_id)
    end

    def authorize
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
