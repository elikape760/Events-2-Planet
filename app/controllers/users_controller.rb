class UsersController < ApplicationController
    before_action :find_user, only: [:update, :destroy]
    

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json:user, status: :ok, serializer: ShowUserSerializer
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created 
    end

    def update
        @user.update!(user_params)
        render json: @user, status: :ok
    end

    def destroy
        @user.destroy
        head :no_content
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :origin, :event_creation, :username, :password, :password_confirmation)
    end

end
