class UserAvailableTimeSerializer < ActiveModel::Serializer
  attributes :id, :name, :rate, :availableTime, :isChosen

  def availableTime
    params = @instance_options[:option_name]
    startDate = Date.parse(params[:startDate])
    endDate = Date.parse(params[:endDate])
    object.availableTimeRange(startDate, endDate)
  end

  def isChosen
    false
  end
end
