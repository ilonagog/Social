class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    def index
        render json: User.all
    end
    def show #me-current user
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Not Authorized"}
        end
    end

    def create #signup create a new user
        user = User.create!(user_params)
        if user.valid?
            session[:user_id]= user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entiry
        end
    end

    private
    def user_params
        params.permit(:username, :password, :email,:name, :avatar, :bio )
    end
end
