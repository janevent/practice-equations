class GamesController < ApplicationController 
    def show
        @game = Game.find_by(id: params[:id])
        render json: @game
    end

    def index 
        @games = Game.all 
        render json: @games
    end

    def create 
        #how to make a game belong to user
        @game = Game.create(points: params[:points], stars: params[:stars], status: params[:status])
        render json: @games
    end 

    def update 
        @game = Game.find_by(id: params[:id])
        @game.update(points: params[:points], stars: params[:stars], status: params[:status])
    end

end