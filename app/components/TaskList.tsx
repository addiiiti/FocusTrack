import { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
};

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}: Props) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditText(task.title);
  };

  const saveEdit = (id: number) => {
    if (!editText.trim()) return;
    onEdit(id, editText);
    setEditingId(null);
  };

  return (
    <ul className="mt-6 space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />

            {editingId === task.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <span
                className={task.completed ? "line-through text-gray-400" : ""}
              >
                {task.title}
              </span>
            )}
          </div>

          <div className="flex gap-2">
            {editingId === task.id ? (
              <button
                onClick={() => saveEdit(task.id)}
                className="text-green-600 font-semibold"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => startEdit(task)}
                className="text-blue-500 font-semibold"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => onDelete(task.id)}
              className="text-red-500 font-semibold"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
