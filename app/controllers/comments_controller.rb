class CommentsController < ApplicationController
    before_action :find_comment, only: [:show, :update, :destroy]

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show
        render json: @comment, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created 
    end

    def update
        @comment.update!(comment_params)
        render json: @comment, status: :ok
    end

    def destroy
        @comment.destroy
        head :no_content
    end

private

    def find_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:name, :comment, :date, :event_id)
    end

end
