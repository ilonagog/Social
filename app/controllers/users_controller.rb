class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    def index
        render json: User.all
    end
    def show #current user
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Not Authorized"}
        end
    end


    def create #signup ,create a new user
        user = User.create!(user_params)
        if user.valid?
            session[:user_id]= user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entiry
        end
    end

    def update
        # byebug
        user = current_user
        if user.update(update_user_params)
          render json: user, status: :accepted
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
      
   
    def user_messages
        user = User.find(params[:id])
        my_messages_to_user = Message.where(sender_id: current_user.id, receiver_id: user.id)
        messages_to_me_from_user = Message.where(sender_id: user.id, receiver_id: current_user.id)
        all_messages = my_messages_to_user + messages_to_me_from_user
        render json: all_messages, status: :ok
      end
   
    private
    def user_params
        params.permit(:username, :email, :name, :avatar, :bio)
    end
      
    def update_user_params
        params.require(:user).permit(:username, :email, :name, :bio)
    end
      

    def current_user
        User.find_by(id: session[:user_id])
      end

    
end
