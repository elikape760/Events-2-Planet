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

puts "hmm"

c1 = Comment.create(name: "Mrs.K", comment: "This party rocks", date: "July 4 2020")
c2 = Comment.create(name: "TT", comment: "DJ gets the house goin'", date: "December 23rd 2021")
c3 = Comment.create(name: "Robbin", comment: "I met some many cool people", date: "August 12 2001")
c4 = Comment.create(name: "Hobbit", comment: "Instructor had my heart racing", date: "May 15 2012")
c5 = Comment.create(name: "TekStar", comment: "The location was super private", date: "April 21 2020")

u1 = User.create(first_name: "Robbin", last_name: "Miller", origin: "Manhattan", event_creation: 6 )
u2 = User.create(first_name: "Tiffany", last_name: "Tam", origin: "Brooklyn", event_creation: 2 )
u3 = User.create(first_name: "Elias", last_name: "Kapeluschnik", origin: "Queens", event_creation: 3 )


Event.create(name: "Brooklyn Warehouse Music", date: "December 23rd 2022", time: "7pm", location: "Brooklyn", description: "", user_id: u1.id, comment_id: c1.id)
Event.create(name: "Girls Night Out", date: "August 12 2002", time: "10am", location: "Manhattan", description: "", user_id: u1.id, comment_id: c2.id)
Event.create(name: "Cooking Brunch", date: "May 15 2013", time: "4pm", location: "Queens", description: "", user_id: u1.id, comment_id: c3.id)
Event.create(name: "HIIT Routine", date: "April 21 2021", time: "9am", location: "Brooklyn", description: "", user_id: u1.id, comment_id: c3.id)
Event.create(name: "Central Park 10 mile Challenge", date: "April 21 2021", time: "7am", location: "Manhattan", description: "", user_id: u1.id, comment_id: c2.id)
Event.create(name: "Hot Yoga", date: "May 15 2013", time: "5pm", location: "Manhattan", description: "", user_id: u1.id, comment_id: c1.id)
Event.create(name: "Make Hot Glass", date: "August 12 2002", time: "6pm", location: "Queens", description: "", user_id: u1.id, comment_id: c2.id)
Event.create(name: "Jazz Speakeasy", date: "April 21 2021", time: "7pm", location: "Manhattan", description: "", user_id: u1.id, comment_id: c3.id)

puts "haa"
