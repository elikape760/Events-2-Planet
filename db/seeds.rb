# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Comment.destroy_all
User.destroy_all
Event.destroy_all

puts "seeding"


u1 = User.create(first_name: "Robbin", last_name: "Miller", origin: "Manhattan", event_creation: 6, username: "rob", password: "password" )
u2 = User.create(first_name: "Tiffany", last_name: "Tam", origin: "Brooklyn", event_creation: 2, username: "Tiffany", password: "password" )
u3 = User.create(first_name: "Elias", last_name: "Kapeluschnik", origin: "Queens", event_creation: 3, username: "Eliask", password: "password" )


e1 = Event.create(name: "Brooklyn Warehouse Music", date: "December 23rd 2022", time: "7pm", location: "Brooklyn", description: "", user_id: u1.id)
e2 = Event.create(name: "Girls Night Out", date: "August 12 2002", time: "10am", location: "Manhattan", description: "", user_id: u1.id)
e3 = Event.create(name: "Cooking Brunch", date: "May 15 2013", time: "4pm", location: "Queens", description: "", user_id: u1.id)
e4 = Event.create(name: "HIIT Routine", date: "April 21 2021", time: "9am", location: "Brooklyn", description: "", user_id: u1.id)
e5 = Event.create(name: "Central Park 10 mile Challenge", date: "April 21 2021", time: "7am", location: "Manhattan", description: "", user_id: u1.id)
e6 = Event.create(name: "Hot Yoga", date: "May 15 2013", time: "5pm", location: "Manhattan", description: "", user_id: u1.id)
e7 = Event.create(name: "Make Hot Glass", date: "August 12 2002", time: "6pm", location: "Queens", description: "", user_id: u1.id)
e8 = Event.create(name: "Jazz Speakeasy", date: "April 21 2021", time: "7pm", location: "Manhattan", description: "", user_id: u1.id)

c1 = Comment.create(name: "Mrs.K", comment: "This party rocks", date: "July 4 2020", event_id: e1.id)
c2 = Comment.create(name: "TT", comment: "DJ gets the house goin'", date: "December 23rd 2021", event_id: e2.id)
c3 = Comment.create(name: "Robbin", comment: "I met some many cool people", date: "August 12 2001", event_id: e3.id)
c4 = Comment.create(name: "Hobbit", comment: "Instructor had my heart racing", date: "May 15 2012", event_id: e4.id)
c5 = Comment.create(name: "TekStar", comment: "The location was super private", date: "April 21 2020", event_id: e5.id)
puts "haa"
