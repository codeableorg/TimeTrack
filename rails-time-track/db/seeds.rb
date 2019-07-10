# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

3.times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    # role: Faker::Job.position,
    role: "Owner",
    rate: Faker::Number.between(1000,2000)
  )
end

3.times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    role: "Manager",
    rate: Faker::Number.between(1000,2000)
  )
end

4.times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    role: "Analist",
    rate: Faker::Number.between(1000,2000)
  )
end



10.times do
  Project.create(
    name: Faker::Name.name,
    client: Faker::Company.name,
    category: Faker::Company.industry,
    start_date: Faker::Date.between(365.days.ago, Date.today),
    end_date: Faker::Date.between(50.days.ago, Date.today),
    closed: Faker::Boolean.boolean,
    estimated_cost: Faker::Number.number(7),
    real_cost: Faker::Number.number(7)
  )
end

10.times do
  ProjectMember.create(
    # name: Faker::Name.name,
    estimated_cost: Faker::Number.number(7),
    real_cost: Faker::Number.number(7)
  )
end

10.times do
  DailyLog.create(
    date: Faker::Date.between(100.days.ago, Date.today),
    amount: Faker::Number.number(6),
  )
end

10.times do
  WeeklyProjectReport.create(
    week: Faker::Number.between(1, 52),
    estimated_cost: Faker::Number.number(7),
    real_cost: Faker::Number.number(7)
  )
end

