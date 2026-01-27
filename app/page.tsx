"use client";

import { useState } from "react";
import TaskInput from "./components/TaskInput";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <main className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">FocusTrack</h1>
      <TaskInput onAdd={(task) => setTasks([...tasks, task])} />
    </main>
  );
}

