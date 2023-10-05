class MessagesController < ApplicationController
    def index
        render json: Message.all
    end

    # def chat
    #     messages = Message.includes(:sender, :receiver).all
    #     render json: messages
    # end
    def create 
        user= find_user_by_session_id
        message = Message.create!(message_params)
    end 

    private
    def message_params
        params.permit(:content)
    end
    def find_user_by_session_id
        user= User.find_by(id: session[:user_id])
    end
end
