"use client";

import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage when component mounts
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <main className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">FocusTrack</h1>

      <ProgressBar
        completed={completedCount}
        total={tasks.length}
      />

      <TaskInput onAdd={addTask} />

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
      />
    </main>
  );
}
