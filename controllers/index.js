const express = require('express');
const router = express.Router();

const userRoutes = require("./api/userRoutes.js");
router.use("/api/users",userRoutes)

const blogRoutes = require("./api/blogRoutes");
router.use("/api/blogs",blogRoutes)

const commentRoutes = require("./api/commentRoutes");
router.use("/api/comments",commentRoutes)

const homeRoutes = require("./homeRoutes");
router.use("/",homeRoutes)

router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})

module.exports = router;