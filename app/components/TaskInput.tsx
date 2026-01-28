import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function TaskInput({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <div className="flex gap-2 mt-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 border rounded p-2"
      />
      <button
        onClick={handleAdd}
        className="bg-teal-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}
