require 'faker'

#Create users

  owner = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "123456",
    role: "Owner",
    rate:1800
  )
  
  manager1 = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "123456",
    role: "Manager",
    rate: 1600
  )

  manager2 = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "123456",
    role: "Manager",
    rate: 1550
  )
  
  analyst1 = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "123456",
    role: "Analyst",
    rate: 1200
  )

  analyst2 = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "123456",
    role: "Analyst",
    rate: 1100
  )

  analyst3 = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "123456",
    role: "Analyst",
    rate: 1150
  )
    
  #Create projects

  project1 = Project.create(
    name: Faker::Company.name,
    client: "Graña y Montero",
    category: Faker::Company.industry,
    start_date: "2019-04-01",
    end_date: "2019-04-30",
    closed: true,
    estimated_cost: 156000,
    real_cost: 171000
  )

  project2 = Project.create(
    name: Faker::Company.name,
    client: "Interbank Group",
    category: Faker::Company.industry,
    start_date: "2019-07-08",
    end_date: "2019-08-15",
    closed: false,
    estimated_cost: 152000,
    real_cost: 169000
  )

  project3 = Project.create(
    name: Faker::Company.name,
    client: "Essalud",
    category: Faker::Company.industry,
    start_date: "2019-07-08",
    end_date: "2019-08-15",
    closed: false,
    estimated_cost: 158000,
    real_cost: 173000
  )

  projectMember1 = ProjectMember.create(
    user:manager1,
    project:project1,
    estimated_cost: manager1.rate*2*20,
    real_cost: manager1.rate*2*20+5000
  )

  projectMember2 = ProjectMember.create(
    user:analyst1,
    project:project1,
    estimated_cost: analyst1.rate*2*20,
    real_cost: analyst1.rate*2*20+5000
  )

  projectMember3 = ProjectMember.create(
    user:analyst2,
    project:project1,
    estimated_cost: analyst2.rate*2*20,
    real_cost: analyst2.rate*2*20+50
  )

  projectMember4 = ProjectMember.create(
    user:manager2,
    project:project2,
    estimated_cost: manager2.rate*2*20,
    real_cost: manager2.rate*2*20+50
  )

  projectMember5 = ProjectMember.create(
    user:analyst2,
    project:project2,
    estimated_cost: analyst2.rate*2*20,
    real_cost: analyst2.rate*2*20+50
  )

  projectMember6 = ProjectMember.create(
    user:analyst3,
    project:project2,
    estimated_cost: analyst3.rate*2*20,
    real_cost: analyst3.rate*2*20+50
  )

  projectMember7 = ProjectMember.create(
    user:manager1,
    project:project3,
    estimated_cost: manager1.rate*2*20+50,
    real_cost: manager1.rate*2*20+50
  )

  projectMember8 = ProjectMember.create(
    user:analyst1,
    project:project3,
    estimated_cost: analyst1.rate*2*20,
    real_cost: analyst1.rate*2*20+50
  )

  projectMember9 = ProjectMember.create(
    user:analyst3,
    project:project3,
    estimated_cost: analyst3.rate*2*20,
    real_cost: analyst3.rate*2*20+50
  )

  #
    arr = [projectMember1, projectMember2, projectMember3, projectMember4, projectMember5, projectMember6, projectMember7,
      projectMember8, projectMember9]

#Create daily log

arr.each do |projectMember|
  15.times do
    DailyLog.create(
      project_member: projectMember,
      date: Faker::Date.between(projectMember.project.start_date, projectMember.project.end_date),
      amount: (projectMember.user.rate)*(Faker::Number.between(1, 8)),
    )
    end  
end

  4.times do
    WeeklyProjectReport.create(
      project: project1,
      week: Faker::Number.between(1, 52),
      estimated_cost: project1.estimated_cost/6,
      real_cost: project1.real_cost/6
    )
  end


p "Data created"