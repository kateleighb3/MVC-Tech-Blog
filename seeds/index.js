const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username: "Snoop Dogg",
        password: "snoopdogg"
    },
    {
        username: "John Wayne",
        password: "johnwayne"
    },
    {
        username: "Britney Spears",
        password: "britneyspears"
    },

]

const blogs = [
    {
        title: "Drop it like it's hot",
        content: "when a pig try to get at you, park it like it's hot",
        userId: 1
    },
    {
        title: "Gin and juice ",
        content: "with my mind on my money and my money on my mind",
        userId: 1
    },
    {
        title: "Saddle up",
        content: "Courage is being scared to death but saddling up anyway",
        userId: 2
    },
    {
        title: "Oops, I did it again",
        content: "Played with your heart and got lost in the game",
        userId: 3
    },
]

const comments = [
    {
        body: "Totally",
        blogId: 1,
        userId: 1
    },
    {
        body: "Whoa, take 'er easy there, Pilgrim",
        blogId: 3,
        userId: 2
    },
    {
        body: "yeah!",
        blogId: 4,
        userId: 1
    },
    {
        body: "Rock on",
        blogId: 2,
        userId: 3
    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()