require 'date'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.create(name:"Open Mic Night", start_time: 'June 26 2018 at 7:00 PM', end_time: 'June 26 2018 at 10:00 PM')
Event.all.last.create_address(line1:"The Mandeville Hotel", line2:"4 Hotel Street", city:"Mandeville", parish:"Manchester", country:"Jamaica")
