class CommentsController < ApplicationController
    def index
        render json: Comment.all
    end
    def show
        comment= Comment.find(params[:id])
        render json: comment
    end
end
