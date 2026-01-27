type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  tasks: Task[];
  onToggle: (id: number) => void;
};

export default function TaskList({ tasks, onToggle }: Props) {
  return (
    <ul className="mt-6 space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center gap-2"
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span className={task.completed ? "line-through" : ""}>
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
