// routes/skills.routes.js
import express from "express";
import Skill from "../models/skill.js";

const router = express.Router();

// ✅ Add a new skill
router.post("/", async (req, res) => {
    try {
        const skill = new Skill(req.body);
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ Get all skills
router.get("/", async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
