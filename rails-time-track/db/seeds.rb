require 'faker'

#Create users

  owner = User.create(
    name: "Diego Owner",
    email: "diegotc86@gmail.com",
    password: "123456",
    role: "Owner",
    rate: 6200
  )
  
  manager1 = User.create(
    name: "Brayan Manager",
    email: "linzeur@hotmail.com",
    password: "123456",
    role: "Manager",
    rate: 4300
  )

  manager2 = User.create(
    name: "Frank Manager",
    email: "manager2@mail.com",
    password: "123456",
    role: "Manager",
    rate: 4500
  )
  
  analyst1 = User.create(
    name: "Jonathan Analyst",
    email: "jcmendozar10@gmail.com",
    password: "123456",
    role: "Analyst",
    rate: 1200
  )

  analyst2 = User.create(
    name: "Lucia Analyst",
    email: "analyst2@mail.com",
    password: "123456",
    role: "Analyst",
    rate: 1100
  )

  analyst3 = User.create(
    name: "Carlos Analyst",
    email: "analyst3@mail.com",
    password: "123456",
    role: "Analyst",
    rate: 1150
  )

  analyst4 = User.create(
    name: "Carmen Analyst",
    email: "analyst4@mail.com",
    password: "123456",
    role: "Analyst",
    rate: 1300
  )
    
  #Create projects

  project1 = Project.create(
    name: "Proyecto 1",
    client: "Graña y Montero",
    category: "Category 1",
    start_date: "2019-07-08",
    end_date: "2019-09-02",
    closed: false,
    estimated_cost: 772800,
    real_cost: 234000
  )

  project2 = Project.create(
    name: "Proyecto 2",
    client: "Interbank Group",
    category: "Category 2",
    start_date: "2019-07-08",
    end_date: "2019-08-19",
    closed: false,
    estimated_cost: 1017600,
    real_cost: 388000
  )

  project3 = Project.create(
    name: "Proyecto 3",
    client: "Essalud",
    category: "Category 3",
    start_date: "2019-07-08",
    end_date: "2019-09-16",
    closed: false,
    estimated_cost: 1164000,
    real_cost: 148400
  )

  project4 = Project.create(
    name: "Proyecto 4",
    client: "Energia y Minas",
    category: "Category 1",
    start_date: "2019-07-08",
    end_date: "2019-10-28",
    closed: false,
    estimated_cost: 3520000,
    real_cost: 409600
  )

  project5 = Project.create(
    name: "Proyecto 5",
    client: "Banco Mundial",
    category: "Category 2",
    start_date: "2019-07-08",
    end_date: "2019-09-30",
    closed: false,
    estimated_cost: 2248800,
    real_cost: 400000
  )

  closed_project1 = Project.create(
    name: "Proyecto Cerrado 1",
    client: "BID",
    category: "Category 2",
    start_date: "2019-05-13",
    end_date: "2019-07-07",
    closed: true,
    estimated_cost: 1000000,
    real_cost: 1024000
  )

  closed_project2 = Project.create(
    name: "Proyecto Cerrado 2",
    client: "Ministerio Produccion",
    category: "Category 3",
    start_date: "2019-05-27",
    end_date: "2019-07-07",
    closed: true,
    estimated_cost: 900000,
    real_cost: 880000
  )

  projectMember1_1 = ProjectMember.create(
    user:owner,
    project:project1,
    estimated_cost: 198400,
    real_cost: 74400
  )

  projectMember1_2 = ProjectMember.create(
    user:manager1,
    project:project1,
    estimated_cost: 275200,
    real_cost: 103200
  )

  projectMember1_3 = ProjectMember.create(
    user:analyst1,
    project:project1,
    estimated_cost: 115200,
    real_cost: 28800
  )

  projectMember1_4 = ProjectMember.create(
    user:analyst3,
    project:project1,
    estimated_cost: 184000,
    real_cost: 27600
  )

  projectMember2_1 = ProjectMember.create(
    user:owner,
    project:project2,
    estimated_cost: 297600,
    real_cost: 124000
  )

  projectMember2_2 = ProjectMember.create(
    user:manager2,
    project:project2,
    estimated_cost: 432000,
    real_cost: 180000
  )

  projectMember2_3 = ProjectMember.create(
    user:analyst2,
    project:project2,
    estimated_cost: 132000,
    real_cost: 52800
  )

  projectMember2_4 = ProjectMember.create(
    user:analyst4,
    project:project2,
    estimated_cost: 156000,
    real_cost: 31200
  )

  projectMember3_1 = ProjectMember.create(
    user:owner,
    project:project3,
    estimated_cost: 372000,
    real_cost: 49600
  )

  projectMember3_2 = ProjectMember.create(
    user:manager1,
    project:project3,
    estimated_cost: 516000,
    real_cost: 34400
  )

  projectMember3_3 = ProjectMember.create(
    user:analyst1,
    project:project3,
    estimated_cost: 96000,
    real_cost: 9600
  )

  projectMember3_4 = ProjectMember.create(
    user:analyst2,
    project:project3,
    estimated_cost: 88000,
    real_cost: 8800
  )

  projectMember3_4 = ProjectMember.create(
    user:analyst3,
    project:project3,
    estimated_cost: 92000,
    real_cost: 46000
  )

  projectMember4_1 = ProjectMember.create(
    user:owner,
    project:project4,
    estimated_cost: 992000,
    real_cost: 99200
  )

  projectMember4_2 = ProjectMember.create(
    user:manager2,
    project:project4,
    estimated_cost: 1728000,
    real_cost: 180000
  )

  projectMember4_3 = ProjectMember.create(
    user:analyst1,
    project:project4,
    estimated_cost: 384000,
    real_cost: 57600
  )

  projectMember4_4 = ProjectMember.create(
    user:analyst4,
    project:project4,
    estimated_cost: 416000,
    real_cost: 72800
  )

  projectMember5_1 = ProjectMember.create(
    user:owner,
    project:project5,
    estimated_cost: 892800,
    real_cost: 148800
  )

  projectMember5_2 = ProjectMember.create(
    user:manager1,
    project:project5,
    estimated_cost: 1032000,
    real_cost: 206400
  )

  projectMember5_3 = ProjectMember.create(
    user:analyst2,
    project:project5,
    estimated_cost: 158400,
    real_cost: 26400
  )

  projectMember5_4 = ProjectMember.create(
    user:analyst3,
    project:project5,
    estimated_cost: 165600,
    real_cost: 18400
  )

  (Project.where(closed: false).each{|project| 
    s = Date.parse(project.start_date.to_s)
    
    project.project_members.each{|member|
      (s..(s+13)).each { |day| 
        if ![0,6].include?(day.wday)
          DailyLog.create(
            project_member: member,
            date: day.to_s,
            amount: member.real_cost/10,
          )
        end
      }
    }
  })

  (Project.where(closed: false).each{|project| 
    s = Date.parse(project.start_date.to_s)
    e = Date.parse(project.end_date.to_s)
    duration = (e - s).to_i / 7
    weeks = {}
    project.daily_logs.each {|log|
      weeks[log.date.cweek] ||= 0
      weeks[log.date.cweek] = (weeks[log.date.cweek] + log.amount)
    }

    weeks.each {|key, value|
      WeeklyProjectReport.create(
        project: project,
        week: key,
        estimated_cost: project.estimated_cost / duration,
        real_cost: value
      )
    }
  })

p "Data created"