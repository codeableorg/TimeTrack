module Api
  class Api::HistoriesController < ApplicationController

    def index
      render json: Project.where(closed: true)
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render json: {message: e.message}, status: :not_found
    end

  end
end