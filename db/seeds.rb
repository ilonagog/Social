# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# u1 = User.first 
# u2 = User.second
# u3 = User.third

#user
u1 = User.create(username: "capstone", email: "ilona@gmail.com", password: "Flatiron2!", name: "Ilona", bio: "I'm a mother of 5year old daughter, and a student at a software bootcamp!")
u2 =  User.create(username: "sofika", email: "sofika@gmail.com", password: "Princess2!", name: "Sophia", bio: "I'm a future cyber security engineer"
)
u3= User.create(username: "favorite", email: "ana@gmail.com", password: "Georgia2!", name: "Anna", bio: "I'm a student at Flatiron school !"
)
u4= User.create(username: "ikaros", email: "ikaros@gmail.com", password: "Rapunzel1@", name: "Ilia", bio: "B.A. in Architecture"
)
u5= User.create(username: "brooklyn", email: "brooklyn@gmail.com", password: "Coffee1!", name: "Giorgi", bio: "Future firefighter"
)
u6= User.create(username: "alex", email: "alex@gmail.com", password: "Georgia1@", name: "Alex", bio: "B.A. in Computer Science"
)

u1.avatar.attach(io: File.open(Rails.root.join('db/images/coffee-cup.jpg')), filename: "coffee-cup.jpg")
u2.avatar.attach(io: File.open(Rails.root.join('db/images/ana.jpg')), filename: "ana.jpg")
u3.avatar.attach(io: File.open(Rails.root.join('db/images/laptop-generative.jpg')), filename: "laptop-generative.jpg")
u4.avatar.attach(io: File.open(Rails.root.join('db/images/young-man.jpg')), filename: "young-man.jpg")
u5.avatar.attach(io: File.open(Rails.root.join('db/images/avatar-boy.jpg')), filename: "avatar-boy.jpg")
u6.avatar.attach(io: File.open(Rails.root.join('db/images/businessman.jpg')), filename: "businessman.jpg")

u1.save
u2.save
u3.save
u4.save
u5.save
u6.save

puts "user edit"
#post 
p1= Post.create(title: "Georgia, Ushguli", user_id: u1.id )
p2= Post.create(title: "Rafael Nadal Parera", user_id: u2.id )
p3= Post.create(title: "Software", user_id: u3.id )
p4= Post.create(title: "Opus by Zaha Hadid Architects (Dubai, U.A.E.)", user_id: u4.id )
p5= Post.create(title: "Firefighter", user_id: u5.id )
p6= Post.create(title: "Computer science", user_id: u6.id )

p1.image.attach(io: File.open(Rails.root.join("db/images/ushguli.jpg")), filename: "ushguli.jpg")
p2.image.attach(io: File.open(Rails.root.join("db/images/nadal.jpg")), filename: "nadal.jpg")
p3.image.attach(io: File.open(Rails.root.join("db/images/pexels-photo.jpeg")), filename: "pexels-photo.jpeg")
p4.image.attach(io: File.open(Rails.root.join("db/images/building.jpg")), filename: "building.jpg")
p5.image.attach(io: File.open(Rails.root.join("db/images/fire.jpg")), filename: "fire.jpg")
p6.image.attach(io: File.open(Rails.root.join("db/images/program.jpg")), filename: "program.jpg")

p1.save
p2.save
p3.save
p4.save
p5.save
p6.save

puts "post edit "
#comment
c1 = Comment.create(content: "I just learned how to seed data using active storage", user_id: u1.id, post_id: p3.id)
c2 = Comment.create(content: "Rafael Nadal, in full Rafael Nadal Parera, byname Rafa Nadal, (born June 3, 1986, Manacor, Mallorca, Spain), Spanish tennis player who emerged in the early 21st century as one of the game’s leading competitors, especially noted for his performance on clay. He won a record 14 career French Open championships and was the first player to win 22 Grand Slam men’s singles titles.", user_id: u2.id, post_id: p2.id)
c3 = Comment.create(content: "Beautiful place", user_id: u3.id, post_id: p1.id)
c4 = Comment.create(content: "The Opus, as the building is being called, will house a hotel, 12 restaurants, a rooftop bar, and 56,000 square feet of office space.", user_id: u4.id, post_id: p4.id)
c5 = Comment.create(content: "Fire safety is important and necessary in the workplace in order to prevent and protect against the destruction caused by fire.", user_id: u3.id, post_id: p5.id)
c6 = Comment.create(content: "Computer science is the process of solving complex organizational problems using technical solutions.The reason this is such an important field is that computers and technology have been integrated into virtually every economic sector, industry, and even organization operating in the modern economy.", user_id: u3.id, post_id: p6.id)


puts "comment edit"

#message
m1 = Message.create(content: "Hello Ilona, which programming languages do you know?", sender_id: u3.id, receiver_id: u1.id)
m2 = Message.create(content: "I have learned JavaScript, Ruby", sender_id: u1.id, receiver_id: u3.id) 
m3= Message.create(content: "What languages do you know?", sender_id: u1.id, receiver_id: u3.id) 
m4=  Message.create(content: "I have learned Python, JavaScript, C++", sender_id: u3.id, receiver_id: u1.id) 
m5= Message.create(content: "That's great i think we can work on maybe JavaScript project together", sender_id: u1.id, receiver_id: u3.id) 
m6= Message.create(content: "Good idea, after graduation i will have more free time to work on something new", sender_id: u3.id, receiver_id: u1.id) 


m7 = Message.create(content: "Hey dad how are you?", sender_id: u2.id, receiver_id: u4.id)
m8 = Message.create(content: "Good Sofi, how are you? How was your day in school?", sender_id: u4.id, receiver_id: u2.id) 
m9= Message.create(content: "Everything was fine, i got 100 on my math test", sender_id: u2.id, receiver_id: u4.id) 
m10=  Message.create(content: "I'm so happy and proud of you", sender_id: u4.id, receiver_id: u2.id) 
m11= Message.create(content: "Okay, i have to study see you soon", sender_id: u2.id, receiver_id: u4.id) 
m12= Message.create(content: "See you, good luck!", sender_id: u4.id, receiver_id: u2.id) 

m13 = Message.create(content: "Hey Alex what's up?", sender_id: u5.id, receiver_id: u6.id)
m14= Message.create(content: "Hey i'm working on my project, have to finish it today", sender_id: u6.id, receiver_id: u5.id) 
m15= Message.create(content: "What are your plans for the next week?", sender_id: u5.id, receiver_id: u6.id)
m16=  Message.create(content: "I want to start a new project and maybe start learning python", sender_id: u6.id, receiver_id: u5.id) 
m17= Message.create(content: "Well, good luck!See you next Monday.", sender_id: u5.id, receiver_id: u6.id) 
m18= Message.create(content: "Okay, see you.", sender_id: u6.id, receiver_id: u5.id) 
     
    # u1 = User.create(username: "capstone", email: "ilona@gmail.com", password: "Flatiron2!", name: "Ilona", avatar: "https://static.vecteezy.com/system/resources/previews/014/212/681/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg", bio: "I'm a mother of 5year old daughter, and a student at a software bootcamp!")
    # u2 = User.create(username: "ikaros", email: "ilia@gmail.com", password: "Georgia1@", name: "Ilia", avatar: "https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg", bio: "I'm a father of 5year old.")
    # u3 = User.create(username: "sofika", email: "sophia@gmail.com", password: "Air22!", name: "Sophia", avatar: "https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181656.png", bio: "I live in NY have family and toy poodle Lulu.")
    
    
    # c1 = Comment.create(content: "Where do you locate? I want to pick up if it is available", user_id: u3.id, post_id: p1.id)
    # c2 = Comment.create(content: "Interested ❤️", user_id: u3.id, post_id: p2.id)
    # c3 = Comment.create(content: "Want to pick them up.", user_id: u1.id, post_id: p3.id)
    # c4 = Comment.create(content: "Interested ", user_id: u1.id, post_id: p4.id)
    # c5 = Comment.create(content: "When can i pick it up?", user_id: u2.id, post_id: p5.id)
    # c6 = Comment.create(content: "For how old is this?", user_id: u2.id, post_id: p6.id)
    # c7 = Comment.create(content: "Interested ❤️", user_id: u2.id, post_id: p7.id)
    
    # m1 = Message.create(content: "Hello ", sender_id: u1.id, receiver_id: u3.id)
    # m2 = Message.create(content: "Hello, want to set time up?", sender_id: u3.id, receiver_id: u1.id)
    # m3 = Message.create(content: "Yes anytime!", sender_id: u1.id, receiver_id: u3.id)
    # m4 = Message.create(content: "Okay then this Saturday at 11am", sender_id: u3.id, receiver_id: u1.id)
