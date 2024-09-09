// pages/api/tasks/route.js
import dbConnect from "@/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";
import Task from "@/models/Task";

// Handle POST request: Create a new task
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    // Extract JSON data from the request body
    const { name, description } = await req.json();

    // Create a new document in the database using the Task model
    const task = new Task({
      name,
      description,
      completed: false, // New tasks are incomplete by default
    });

    await task.save();

    // Return a success response
    return NextResponse.json({ message: "Task created successfully!" }, { status: 201 });
  } catch (error) {
    // Return an error response
    return NextResponse.json({ error: "Failed to create task" }, { status: 500 });
  }
}

// Handle GET request: Retrieve all tasks
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    // Fetch all tasks from the database
    const tasks = await Task.find();

    // Return the list of tasks
    return NextResponse.json({ message: "Tasks retrieved successfully!", data: tasks }, { status: 200 });
  } catch (error) {
    // Return an error response
    return NextResponse.json({ error: "Failed to retrieve tasks" }, { status: 500 });
  }
}
