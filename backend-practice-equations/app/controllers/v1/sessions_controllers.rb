class V1::SessionsController < ApplicationController #Devise::SessionsController
    def create
      user = User.find_by(username: sign_in_params[:username])
  
      if user && user.valid_password?(sign_in_params[:password])
        @current_user = user
        render json: @current_user
      else
        render json: { errors: { 'username or password' => ['is invalid'] } }, status: :unprocessable_entity
      end
    end

    def destroy
    end
  end