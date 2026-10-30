import type { Task } from '../../types/task';
import EmptyState from '../EmptyState/EmptyState';
import TaskCard from '../TaskCard/TaskCard';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  status: Task['status'];
}

const statusStyles: Record<Task['status'], { divider: string; text: string }> =
  {
    todo: { divider: 'bg-pink-500', text: 'text-pink-600' },
    'in-progress': { divider: 'bg-blue-500', text: 'text-blue-600' },
    done: { divider: 'bg-green-500', text: 'text-green-600' },
  };

function TaskColumn({ title, tasks, status }: TaskColumnProps) {
  return (
    <div className="min-h-64 min-w-0 rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center gap-2">
        <h2 className="font-semibold">{title}</h2>
        <span
          className={`rounded-full bg-white px-2 py-1 text-sm ${statusStyles[status].text}`}
        >
          {tasks.length}
        </span>
      </div>
      <div
        aria-hidden="true"
        className={`mt-3 h-1 rounded-full ${statusStyles[status].divider}`}
      />
      <div className="mt-4 flex flex-col gap-3">
        {tasks.length === 0 ? (
          <EmptyState
            title="No tasks yet"
            description="Tasks in this status will appear here."
          />
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}

export default TaskColumn;
