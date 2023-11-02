class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: [:index, :show]
    wrap_parameters format: []

    def index
        render json: Comment.all
    end
    def show
        comment= Comment.find(params[:id])
        render json: comment
    end
    def create
        
         user = find_user_by_session_id
         comment = user.comments.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        user = find_user_by_session_id
        comment = user.comments.find(params[:id])
        comment.update!(comment_params)
        render json: comment
    end
    def destroy
        user = find_user_by_session_id
        comment= user.comments.find(params[:id])
        comment.destroy
        head :no_content
    end

    private 

    def comment_params
        params.permit(:content, :user_id, :post_id)
    end
    def find_user_by_session_id
        user= User.find_by(id: session[:user_id])
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Comment not found" }, status: :not_found
    end
end
