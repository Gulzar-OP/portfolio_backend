import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Routes
import project from './routes/projects.js';
import blogRoutes from './routes/blogRoutes.js';
import skillsRoutes from "./routes/skills.js";


// middleware
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', project);
app.use('/api/blogs', blogRoutes); 
app.use("/api/skills", skillsRoutes);

// Test Route (Optional)
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

// MongoDB Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => console.error(err));
