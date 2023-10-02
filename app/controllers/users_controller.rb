class UsersController < ApplicationController
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :Ok
        else
            render json: {error: "Not Authorized"}
        end
    end
end
