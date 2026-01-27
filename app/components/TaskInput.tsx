"use client";

import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function TaskInput({ onAdd }: Props) {
  const [task, setTask] = useState("");

  return (
    <div className="flex gap-2">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="border px-3 py-2 rounded w-full"
      />
      <button
        onClick={() => {
          if (!task.trim()) return;
          onAdd(task);
          setTask("");
        }}
        className="bg-black text-white px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}
