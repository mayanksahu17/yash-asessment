




import mongoose from "mongoose";



const taskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  }, { timestamps: true });
  
  export default mongoose.models.Task || mongoose.model("Task", taskSchema);