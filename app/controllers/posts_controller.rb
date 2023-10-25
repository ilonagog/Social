class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorize, only: [:index, :show]
    wrap_parameters format: []
    def index 
        render json: Post.all
    end
    def show
        post= Post.find(params[:id])
        render json: post
    end
    def create 
        # user = User.find(params[:id])
        post = Post.create!(create_post_params)
        render json: post, status: :created
    end

    def update
        # user= User.find_by(id: session[:user_id])
        post = Post.find(params[:id])
    #    posts.find(update_post_params)

        post.update!(update_post_params)
        render json: post
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private
    def create_post_params
        params.permit(:title, :image).merge(user_id: session[:user_id])
    end

    def update_post_params
        params.permit(:title)
    end
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Post not found" }, status: :not_found
    end
    
end
