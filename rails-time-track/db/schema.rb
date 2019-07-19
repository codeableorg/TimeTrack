# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_18_160915) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "daily_logs", force: :cascade do |t|
    t.bigint "project_member_id"
    t.date "date"
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_member_id"], name: "index_daily_logs_on_project_member_id"
  end

  create_table "project_members", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "project_id"
    t.integer "estimated_cost"
    t.integer "real_cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_members_on_project_id"
    t.index ["user_id"], name: "index_project_members_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "client"
    t.string "category"
    t.date "start_date"
    t.date "end_date"
    t.boolean "closed"
    t.integer "estimated_cost"
    t.integer "real_cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "role"
    t.integer "rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "token"
    t.string "reset_digest"
    t.string "reset_created_at"
    t.index ["token"], name: "index_users_on_token"
  end

  create_table "weekly_project_reports", force: :cascade do |t|
    t.bigint "project_id"
    t.string "week"
    t.integer "estimated_cost"
    t.integer "real_cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_weekly_project_reports_on_project_id"
  end

  add_foreign_key "daily_logs", "project_members"
  add_foreign_key "project_members", "projects"
  add_foreign_key "project_members", "users"
  add_foreign_key "weekly_project_reports", "projects"
end
