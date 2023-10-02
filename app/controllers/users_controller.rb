class UsersController < ApplicationController
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :Ok
        else
            render json: {error: "Not Authorized"}
        end
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id]= user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors_full_messages}, status: :unprocessable_entiry
        end
    end
end
