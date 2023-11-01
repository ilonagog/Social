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

# p1 = Post.create(title: "Donating baby clothes", image: "https://media.womensweekly.com.sg/public/2019/11/Donate-Children-Clothes-Feature-The-Singapore-Womens-Weekly.png", user_id: u1.id )
# p2 = Post.create(title: "Donating children's books", image: "https://www.berniesbookbank.org/wp-content/uploads/2021/11/IMG_6506.jpg", user_id: u1.id )
# p3 = Post.create(title: "Donating used coat, good condition", image: "https://horizongoodwill.org//wp-content/uploads/2014/11/winter-coats.jpg", user_id: u2.id )
# p4 = Post.create(title: "Donating used Timberland boots", image: "https://i.ebayimg.com/images/g/RlwAAOSwCTJi5E-4/s-l1200.webp", user_id: u2.id )
# p5 = Post.create(title: "Donating electric piano", image: "https://img1.wsimg.com/isteam/ip/2791af10-f315-4a52-937d-a440ff36bb81/715W6e3FdEL._AC_SL1500_.jpg/:/rs=w:360,h:270,cg:true,m/cr=w:360,h:270", user_id: u3.id )
# p6 = Post.create(title: "Donating bicycle", image: "https://www.zifflaw.com/wp-content/uploads/2011/06/children_bicycles1.jpg",  user_id: u3.id )
# p7 = Post.create(title: "Children's toys for free", image: "https://supersimple.com/wp-content/uploads/toydonation_3-1200w-blog.jpg", user_id: u3.id )

# c1 = Comment.create(content: "Where do you locate? I want to pick up if it is available", user_id: u3.id, post_id: p1.id)
# c2 = Comment.create(content: "Interested ❤️", user_id: u3.id, post_id: p2.id)
# c3 = Comment.create(content: "Want to pick them up.", user_id: u1.id, post_id: p3.id)
# c4 = Comment.create(content: "Interested ", user_id: u1.id, post_id: p4.id)
# c5 = Comment.create(content: "When can i pick it up?", user_id: u2.id, post_id: p5.id)
# c6 = Comment.create(content: "For how old is this?", user_id: u2.id, post_id: p6.id)
# c7 = Comment.create(content: "Interested ❤️", user_id: u2.id, post_id: p7.id)
u1 = User.first 
u2 = User.second
u3 = User.third


m1 = Message.create(content: "Hello ", sender_id: u1.id, receiver_id: u3.id)
m2 = Message.create(content: "Hello, want to set time up?", sender_id: u3.id, receiver_id: u1.id)
m3 = Message.create(content: "Yes anytime!", sender_id: u1.id, receiver_id: u3.id)
m4 = Message.create(content: "Okay then this Saturday at 11am", sender_id: u3.id, receiver_id: u1.id)