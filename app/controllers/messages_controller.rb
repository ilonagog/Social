class MessagesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: [:index, :show]
    wrap_parameters format: []
    def index
        render json: Message.all
    end
 
    def show
        message = Message.find(params[:id])
        render json: message
    end

    def create 
        message = Message.create!(message_params)
        render json:  message, status: :created
    end 

    private
    def message_params
        params.permit(:content, :sender_id, :receiver_id)
    end
      
    def find_user_by_session_id
        user = User.find_by(id: session[:user_id])
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "message not found" }, status: :not_found
    end
end

