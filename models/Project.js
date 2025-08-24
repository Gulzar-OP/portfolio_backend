import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    tech: { type: [String], required: true },
    link: { type: String },
    image: { type: String }
});

export default mongoose.model("Project", projectSchema);
