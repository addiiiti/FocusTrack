type Props = {
  completed: number;
  total: number;
};

export default function ProgressBar({ completed, total }: Props) {
  const percent = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="mb-6">
      <div className="h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-green-500 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-sm mt-1">
        {completed} / {total} tasks completed
      </p>
    </div>
  );
}
