// components/HorizontalScroll.js
"use client";

import React, { useEffect, useRef } from 'react';
import Page1 from '@/components/Page1';
import Page4 from '@/components/Page4';
import Page3 from '@/components/Page3';
import Page2 from '@/components/Page2';
const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current as any;

    const handleScroll = (event : any) => {
      // Adjust horizontal scroll based on vertical scroll event
      if (scrollContainer) {
        scrollContainer.scrollLeft += event.deltaY;
      }
    };

    // Add scroll event listener on window
    window.addEventListener('wheel', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen h-screen overflow-x-auto overflow-y-hidden"
    >
      <div className="flex min-w-full h-full">
      
{/* page 1 */}

        <Page1 />
        <div className=""></div>
        {/* Page 2 */}
       <Page2 />
        {/* Page 3 */}
       <Page3 />
        {/* Page 4 */}
        <Page4 />
      </div>
    </div>
  );
};

export default HorizontalScroll;





















































// "use client";



// import { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";

// interface Task {

//   id: string;
//   _id: string;
//   name: string;
//   description: string;
//   completed: boolean;
// }

// interface NewTask {
//   name: string;
//   description: string;
// }

// export default function Component() {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [newTask, setNewTask] = useState<NewTask>({ name: "", description: "" });

//   useEffect(() => {
//     // Fetch tasks when the component mounts
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await fetch("/api/tasks");
//       const result = await response.json();
//       if (response.ok) {
//         setTasks(result.data);
//       } else {
//         console.error(result.error);
//       }
//     } catch (error) {
//       console.error("Failed to fetch tasks:", error);
//     }
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setNewTask({
//       ...newTask,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleAddTask = async (e: FormEvent) => {
//     e.preventDefault();
//     if (newTask.name.trim() !== "") {
//       try {
//         const response = await fetch("/api/tasks", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(newTask),
//         });
//         const result = await response.json();
//         if (response.ok) {
//           setNewTask({ name: "", description: "" });
//           fetchTasks(); // Refresh the task list
//         } else {
//           console.error(result.error);
//         }
//       } catch (error) {
//         console.error("Failed to add task:", error);
//       }
//     }
//   };

//   const handleTaskComplete = async (id: string) => {
//     try {
//       const taskToUpdate = tasks.find((task) => task.id === id);
//       if (taskToUpdate) {
//         const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
//         const response = await fetch(`/api/tasks/${id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedTask),
//         });
//         const result = await response.json();
//         if (response.ok) {
//           setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
//         } else {
//           console.error(result.error);
//         }
//       }
//     } catch (error) {
//       console.error("Failed to update task:", error);
//     }
//   };

//   const handleTaskDelete = async (id: string) => {
//     try {
//       const response = await fetch(`/api/tasks/${id}`, {
//         method: "DELETE",
//       });
//       const result = await response.json();
//       if (response.ok) {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//       } else {
//         console.error(result.error);
//       }
//     } catch (error) {
//       console.error("Failed to delete task:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-background">
//       <header className="bg-primary text-primary-foreground py-4 px-6">
//         <h1 className="text-2xl font-bold">Task Manager</h1>
//       </header>
//       <main className="flex-1 overflow-auto p-6">
//         <div className="mb-6">
//           <h2 className="text-lg font-medium mb-2">Add New Task</h2>
//           <form onSubmit={handleAddTask} className="grid gap-4">
//             <div>
//               <Label htmlFor="name">Task Name</Label>
//               <Input
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter task name"
//                 value={newTask.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="description">Description</Label>
//               <Textarea
//                 id="description"
//                 name="description"
//                 placeholder="Enter task description"
//                 value={newTask.description}
//                 onChange={handleInputChange}
//                 rows={3}
//               />
//             </div>
//             <Button type="submit">Add Task</Button>
//           </form>
//         </div>
//         <div>
//           <h2 className="text-lg font-medium mb-2">Tasks</h2>
//           <div className="grid gap-4">
//             {tasks.map((task) => (
//               <Card key={task.id} className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <Checkbox checked={task.completed} onCheckedChange={() => handleTaskComplete(task._id)} />
//                   <div>
//                     <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
//                       {task.name}
//                     </p>
//                     <p className="text-muted-foreground">{task.description}</p>
//                   </div>
//                 </div>
//                 <Button variant="ghost" size="icon" onClick={() => handleTaskDelete(task._id)}>
//                   <Trash2Icon className="h-5 w-5" />
//                   <span className="sr-only">Delete task</span>
//                 </Button>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// function Trash2Icon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//       <line x1="10" y1="11" x2="10" y2="17" />
//       <line x1="14" y1="11" x2="14" y2="17" />
//     </svg>
//   )
// }
