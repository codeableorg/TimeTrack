# TimeTrack Project

## Collaborators

- [Diego Torres](https://github.com/diegotc86)
- [Brayan Ciudad](https://github.com/linzeur)
- [Lian Nivin](https://github.com/liannivin)
- [Carlos Ayala](https://github.com/test0n3)
- [Paulo Tijero](https://github.com/paulotijero)
- [Jonathan Mendoza](https://github.com/Gatts1)

## API routes

| Verb   | Endpoint                        | Description                                  |
| ------ | ------------------------------- | -------------------------------------------- |
| POST   | /api/login                      | Get a web token to use services              |
| DELETE | /api/logout                     | Delete token                                 |
| POST   | /api/change-password            | Allow password change after user login       |
| POST   | /api/reset-password             | Allow password reset                         |
| GET    | /api/projects/my-projects       | List projects by logged user                 |
| PUT    | /api/projects/:project_id/close | Change project state to close                |
| GET    | /api/projects                   | List all open projects                       |
| POST   | /api/projects                   | Adds new project                             |
| GET    | /api/projects/:id               | List details of a specific project           |
| GET    | /api/weekly_project_reports/:id | List weekly data for a specific project      |
| GET    | /api/daily_logs                 | List all daily_logs                          |
| POST   | /api/daily_logs                 | Adds a new daily log                         |
| GET    | /api/histories                  | List all closed projects                     |
| GET    | /api/users/:user_id/projects    | List all projects from an specific user      |
| POST   | /api/users/availableTime        | Changes the the user availableTime           |
| PUT    | /api/users/:id/updateState      | Create a user                                |
| GET    | /api/users                      | List all users                               |
| POST   | /api/users                      | Create a user                                |
| GET    | /api/users/:id                  | List an specific users                       |
| PATCH  | /api/users/:id                  | Edit a user                                  |
| PUT    | /api/users/:id                  | Edit a user                                  |
| GET    | /api/project_members            | List all project_members                     |
| GET    | /api/users/:user_id/projects    | List projects in which the user participates |

## Installation

- Clone the repository and check the project's folder
- The current software works with PostgreSQL RDBMS

_rails-time-track_ folder

- Create a `.env` file in the root path of the project and copy all content of file `.env.example` and set your credentials. Follow the instructions in the file.
- Execute `bundle` to install all gems
  ```bash
  bundle install
  ```
- Setup your Database
  ```bash
  rails db:create
  rails db:migrate
  rails db:seed
  ```
- Start server
  ```bash
  rails server
  ```
- Go to http://localhost:3000/api to check all the API routes

_react-time-track_ folder

- Execute `npm install` or `yarn install` to download the required modules
- Run the frontend application with:
  ```bash
  npm start
  ```
  or
  ```bash
  yarn start
  ```
- A browser window will open with with the address: http://localhost:4000/

**Welcome to the Time tracker project**
