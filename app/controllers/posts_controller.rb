class PostsController < ApplicationController
    def index 
        render json: Post.all
    end
    def show
        post= Post.find(params[:id])
        render json: post
    end

    def create 
        post = Post.create!(post_params)
        render json: post, status: :created
    end
    private
    def post_params
        params.permit(:title, :image)
    end
    
end
