import type { Task } from '../../types/task';

interface TaskCardProps {
  task: Task;
}

const priorityStyles: Record<Task['priority'], string> = {
  low: 'bg-emerald-50 text-emerald-800',
  medium: 'bg-amber-50 text-amber-800',
  high: 'bg-rose-50 text-rose-800',
};

function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="wrap-break-word font-semibold text-slate-900">
        {task.title}
      </h3>
      <p className="mt-2 wrap-break-word text-sm leading-6 text-slate-600">
        {task.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${priorityStyles[task.priority]}`}
        >
          {task.priority} priority
        </span>
        <span className="text-xs text-slate-500">
          Due <time dateTime={task.dueDate}>{task.dueDate}</time>
        </span>
      </div>
    </article>
  );
}

export default TaskCard;
