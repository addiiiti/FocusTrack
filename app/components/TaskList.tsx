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

            <input
              type="text"
              value={task.title}
              onChange={(e) => onEdit(task.id, e.target.value)}
              className={`bg-transparent outline-none border-b border-transparent focus:border-gray-400 ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            />
          </div>

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 font-bold"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
