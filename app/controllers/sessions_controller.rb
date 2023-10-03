class SessionsController < ApplicationController

    def create #login and authenticate
        user  = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: "Invalid username or password"}
        end
    end

    def destroy #logout
        session.clear
    end
end
