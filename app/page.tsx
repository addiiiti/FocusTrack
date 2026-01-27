"use client";

import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
 const [tasks, setTasks] = useState<Task[]>([]);

  
  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

 
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <main className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">FocusTrack</h1>
      <TaskInput onAdd={(task) => setTasks([...tasks, task])} />
    </main>
  );
}

