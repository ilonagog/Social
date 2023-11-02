# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
# u1 = User.first 
# u2 = User.second
# u3 = User.third


u6= User.create(username: "favorite", email: "ilona@gmail.com", password: "Flatiron2!", name: "Anna", bio: "I'm a student at Flatiron school !"
)
u6.image.attach(io: File.open(Rails.root.join('db/images/laptop-generative.jpg')), filename: "laptop-generative.jpg")

p6= Post.create(title: "Donating baby clothes", user_id: u6.id )
p6.image.attach(io: File.open(Rails.root.join("db/images/pexels-photo.jpeg")), filename: "pexels-photo.jpeg")


# m1 = Message.create(content: "Hello ", sender_id: u1.id, receiver_id: u3.id)
# m2 = Message.create(content: "Hello, want to set time up?", sender_id: u3.id, receiver_id: u1.id)
# m3 = Message.create(content: "Yes anytime!", sender_id: u1.id, receiver_id: u3.id)
# m4 = Message.create(content: "Okay then this Saturday at 11am", sender_id: u3.id, receiver_id: u1.id)