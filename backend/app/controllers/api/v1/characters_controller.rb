class Api::V1::CharactersController < ApplicationController
    # to see server online: http://localhost:3000/api/v1/characters
    #to see by id http://localhost:3000/api/v1/characters/1

    def index
        characters = Character.all
            render json: characters, only: [:name, :char_type, :species, :description, :image]
    end

    # def new
    #     character = Character.new
    # end

    def show
        character = Character.find(params[:id])
        render json: character
    end
    
    def create
        character = Character.create(charParams)
            render json: character
    end

    private
    def charParams
        params.require(:character).permit(:name, :char_type, :species, :description, :image)
    end 
end
