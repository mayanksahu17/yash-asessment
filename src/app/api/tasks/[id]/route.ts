// pages/api/tasks/[id]/route.ts
import dbConnect from "@/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";
import Task from "@/models/Task";

// Handle PUT request: Update a task
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect();

    const { id } = params; // Get the task ID from the dynamic route
    const { name, description, completed } = await req.json(); // Extract JSON data from the request body

    // Update the task with the new data
    const task = await Task.findByIdAndUpdate(id, { name, description, completed }, { new: true });

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    // Return a success response
    return NextResponse.json({ message: "Task updated successfully!", data: task }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}

// Handle DELETE request: Delete a task
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect();

    const { id } = params; // Get the task ID from the dynamic route

    // Delete the task by ID
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    // Return a success response
    return NextResponse.json({ message: "Task deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}
