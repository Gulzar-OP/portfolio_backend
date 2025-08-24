import express from 'express';
import Blog from '../models/blog.js';

const router = express.Router();

// ✅ Get all blogs
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find();
        // console.log("📜 Blogs fetched:", blogs); // Terminal me log
        res.json(blogs); // JSON return
    } catch (error) {
        console.error("❌ Error fetching blogs:", error);
        res.status(500).json({ message: "Server Error" });
    }
});
// Add new blogs
router.post('/',async (req,res)=>{
    try{
        const blog=new Blog(req,body);
        const blogSave= await blog.save();
        res.status(201).json(blogSave);
    }
    catch(error){
        console.error("❌ Error saving blogs:", error);
        res.status(500).json({ message: "Server Error" });
    }
})

export default router;
