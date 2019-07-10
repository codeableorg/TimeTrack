# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
include faker

10.times do
  CreateUsers.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    role: Faker::Job.position.role
    rate: Faker::Number.number(3).rate,
  )
end

10.times do
  CreateProjects.create(
    name: Faker::Name.name,
    client: Faker::Company.name.client,
    category: Faker::Company.industry.category,
    start: Faker::Date.between(365.days.ago, Date.today).start,
    projectedEnd: Faker::Date.between(365.days.ago, Date.today).projectedEnd,
    closed: Faker::Boolean.boolean,
    estimated_cost: Faker::Number.number(5).estimated_cost,
    real_cost: Faker::Number.number(5).real_cost
  )
end

10.times do
  CreateProjectMembers(
    name: Faker::Name.name,
    name: Faker::Name.name,
    estimated_cost: Faker::Number.number(5).estimated_cost,
    real_cost: Faker::Number.number(5).real_cost
  )
end

10.times do
  CreateDailyLogs(
    date: 
  )
end

