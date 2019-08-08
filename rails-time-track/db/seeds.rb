require 'faker'

#Create users

  owner = User.create(
    name: "Diego",
    email: "diegotc86@gmail.com",
    password: "123456",
    role: "Owner",
    rate: 6200
  )
  
  manager1 = User.create(
    name: "Brayan",
    email: "linzeur@hotmail.com",
    password: "123456",
    role: "Manager",
    rate: 4300
  )

  manager2 = User.create(
    name: "Frank",
    email: "manager2@mail.com",
    password: "123456",
    role: "Manager",
    rate: 4500,
    isActive: false
  )
  
  analyst1 = User.create(
    name: "Jonathan",
    email: "jcmendozar10@gmail.com",
    password: "123456",
    role: "Analyst",
    rate: 1200
  )

  analyst2 = User.create(
    name: "Lian",
    email: "analyst2@mail.com",
    password: "123456",
    role: "Analyst",
    rate: 1100
  )

  analyst3 = User.create(
    name: "Carlos",
    email: "analyst3@mail.com",
    password: "123456",
    role: "Analyst",
    rate: 1150
  )

  analyst4 = User.create(
    name: "Carmen",
    email: "analyst4@mail.com",
    password: "123456",
    role: "Analyst",
    rate: 1300,
    isActive: false
  )
    
  #Create projects

  project1 = Project.create(
    name: "Kampu",
    client: "Graña y Montero",
    category: "Category 1",
    start_date: "2019-07-08",
    end_date: "2019-09-02",
    closed: false,
    estimated_cost: 772800,
    real_cost: 0
  )

  project2 = Project.create(
    name: "Line Balancing",
    client: "Interbank Group",
    category: "Category 2",
    start_date: "2019-07-08",
    end_date: "2019-08-19",
    closed: false,
    estimated_cost: 1017600,
    real_cost: 0
  )

  project3 = Project.create(
    name: "Shift me",
    client: "Essalud",
    category: "Category 3",
    start_date: "2019-07-08",
    end_date: "2019-09-16",
    closed: false,
    estimated_cost: 1164000,
    real_cost: 0
  )

  project4 = Project.create(
    name: "OverBooking",
    client: "Energia y Minas",
    category: "Category 1",
    start_date: "2019-07-08",
    end_date: "2019-10-28",
    closed: false,
    estimated_cost: 3520000,
    real_cost: 0
  )

  project5 = Project.create(
    name: "Codeable App",
    client: "Able",
    category: "Category 2",
    start_date: "2019-07-08",
    end_date: "2019-09-30",
    closed: false,
    estimated_cost: 2248800,
    real_cost: 0
  )

  closed_project1 = Project.create(
    name: "Proyecto Cerrado 1",
    client: "BID",
    category: "Category 2",
    start_date: "2019-05-13",
    end_date: "2019-07-07",
    closed: true,
    estimated_cost: 665600,
    real_cost: 0
  )

  closed_project2 = Project.create(
    name: "Proyecto Cerrado 2",
    client: "Ministerio Produccion",
    category: "Category 3",
    start_date: "2019-05-13",
    end_date: "2019-07-07",
    closed: true,
    estimated_cost: 940800,
    real_cost: 0
  )

  projectMember1_1 = ProjectMember.create(
    user:owner,
    project:project1,
    estimated_cost: 198400,
    real_cost: 0
  )

  projectMember1_2 = ProjectMember.create(
    user:manager1,
    project:project1,
    estimated_cost: 275200,
    real_cost: 0
  )

  projectMember1_3 = ProjectMember.create(
    user:analyst1,
    project:project1,
    estimated_cost: 115200,
    real_cost: 0
  )

  projectMember1_4 = ProjectMember.create(
    user:analyst3,
    project:project1,
    estimated_cost: 184000,
    real_cost: 0
  )

  projectMember2_1 = ProjectMember.create(
    user:owner,
    project:project2,
    estimated_cost: 297600,
    real_cost: 0
  )

  projectMember2_2 = ProjectMember.create(
    user:manager2,
    project:project2,
    estimated_cost: 432000,
    real_cost: 0
  )

  projectMember2_3 = ProjectMember.create(
    user:analyst2,
    project:project2,
    estimated_cost: 132000,
    real_cost: 0
  )

  projectMember2_4 = ProjectMember.create(
    user:analyst4,
    project:project2,
    estimated_cost: 156000,
    real_cost: 0
  )

  projectMember3_1 = ProjectMember.create(
    user:owner,
    project:project3,
    estimated_cost: 372000,
    real_cost: 0
  )

  projectMember3_2 = ProjectMember.create(
    user:manager1,
    project:project3,
    estimated_cost: 516000,
    real_cost: 0
  )

  projectMember3_3 = ProjectMember.create(
    user:analyst1,
    project:project3,
    estimated_cost: 96000,
    real_cost: 0
  )

  projectMember3_4 = ProjectMember.create(
    user:analyst2,
    project:project3,
    estimated_cost: 88000,
    real_cost: 0
  )

  projectMember3_4 = ProjectMember.create(
    user:analyst3,
    project:project3,
    estimated_cost: 92000,
    real_cost: 0
  )

  projectMember4_1 = ProjectMember.create(
    user:owner,
    project:project4,
    estimated_cost: 992000,
    real_cost: 0
  )

  projectMember4_2 = ProjectMember.create(
    user:manager2,
    project:project4,
    estimated_cost: 1728000,
    real_cost: 0
  )

  projectMember4_3 = ProjectMember.create(
    user:analyst1,
    project:project4,
    estimated_cost: 384000,
    real_cost: 0
  )

  projectMember4_4 = ProjectMember.create(
    user:analyst4,
    project:project4,
    estimated_cost: 416000,
    real_cost: 0
  )

  projectMember5_1 = ProjectMember.create(
    user:owner,
    project:project5,
    estimated_cost: 892800,
    real_cost: 0
  )

  projectMember5_2 = ProjectMember.create(
    user:manager1,
    project:project5,
    estimated_cost: 1032000,
    real_cost: 0
  )

  projectMember5_3 = ProjectMember.create(
    user:analyst2,
    project:project5,
    estimated_cost: 158400,
    real_cost: 0
  )

  projectMember5_4 = ProjectMember.create(
    user:analyst3,
    project:project5,
    estimated_cost: 165600,
    real_cost: 0
  )

  projectMember6_1 = ProjectMember.create(
    user:owner,
    project:closed_project1,
    estimated_cost: 198400,
    real_cost: 0
  )

  projectMember6_2 = ProjectMember.create(
    user:manager1,
    project:closed_project1,
    estimated_cost: 275200,
    real_cost: 0
  )

  projectMember6_3 = ProjectMember.create(
    user:analyst1,
    project:closed_project1,
    estimated_cost: 192000,
    real_cost: 0
  )

  projectMember7_1 = ProjectMember.create(
    user:owner,
    project:closed_project2,
    estimated_cost: 297600,
    real_cost: 0
  )

  projectMember7_2 = ProjectMember.create(
    user:manager2,
    project:closed_project2,
    estimated_cost: 432000,
    real_cost: 0
  )

  projectMember7_3 = ProjectMember.create(
    user:analyst2,
    project:closed_project2,
    estimated_cost: 211200,
    real_cost: 0
  )

  (Project.where(closed: false).each{|project| 
    start = Date.parse(project.start_date.to_s)
    finish = Date.parse(project.end_date.to_s)
    yesterday = Date.today.prev_day
    duration = 0
    (start..finish).each{|day| duration += 1 if (![6,7].include?(day.cwday))}
    
    project.project_members.each{|member|
      (start..yesterday).each { |day| 
        if ![6,7].include?(day.cwday)
          DailyLog.create(
            project_member: member,
            date: day.to_s,
            amount: (member.estimated_cost / duration * rand(0..1.85)).to_i
          )
        end
      }
    }
  })

  (Project.where(closed: true).each{|project| 
    start = Date.parse(project.start_date.to_s)
    finish = Date.parse(project.end_date.to_s)
    duration = 0
    (start..finish).each{|day| duration += 1 if (![6,7].include?(day.cwday))}
    
    project.project_members.each{|member|
      (start..finish).each { |day| 
        if ![6,7].include?(day.cwday)
          DailyLog.create(
            project_member: member,
            date: day.to_s,
            amount: (member.estimated_cost / duration * rand(0..1.85)).to_i
          )
        end
      }
    }
  })

  Project.all.each{|project| 
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
  }

  Project.all.each{|project|
    project_cost = 0
    project.project_members.each{|project_member|
      real_cost = project_member.daily_logs.reduce(0){|acum, daily| acum + daily.amount }
      project_member.real_cost = real_cost
      project_member.save
      project_cost += real_cost
    }
    
    project.real_cost = project_cost
    project.save
  }

  ##User Report
  Project.all.each{|project| 
    s = Date.parse(project.start_date.to_s)
    e = Date.parse(project.end_date.to_s)
    duration = (e - s).to_i / 7
    project.project_members.each{|project_member|
      weeks = {}
      project_member.daily_logs.each {|log|
        weeks[log.date.cweek] ||= 0
        weeks[log.date.cweek] = (weeks[log.date.cweek] + log.amount)
      }

      weeks.each {|key, value|
        UserProjectReport.create(
          project_member: project_member,
          week: key,
          estimated_cost: project_member.estimated_cost / duration,
          real_cost: value
        )
      }
    }
  } 

p "Data created"