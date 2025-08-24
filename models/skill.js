// models/skills.model.js
import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true }
});

export default mongoose.model("Skill", skillSchema);
