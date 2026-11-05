import { useState } from 'react';
import type { NewTask } from '../../../types/task';
import Button from '../../Button/Button';

interface TaskFormProps {
  onCreate: (task: NewTask) => void;
}
function TaskForm({ onCreate }: TaskFormProps) {
  const [titleError, setTitleError] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitleError('');
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title');
    const description = formData.get('description');
    const status = formData.get('status');
    const priority = formData.get('priority');
    const dueDate = formData.get('dueDate');

    if (
      typeof title !== 'string' ||
      typeof description !== 'string' ||
      typeof dueDate !== 'string'
    ) {
      return;
    }

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setTitleError('Enter a task title.');
      return;
    }
    if (!dueDate) return;
    if (status !== 'todo' && status !== 'in-progress' && status !== 'done') {
      return;
    }
    if (priority !== 'low' && priority !== 'medium' && priority !== 'high') {
      return;
    }

    onCreate({
      title: trimmedTitle,
      description: description.trim(),
      status,
      priority,
      dueDate,
    });

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={submitForm} className="space-y-4">
      <div>
        <label htmlFor="title" className="block mb-2">
          Task Name
        </label>
        <input
          id="title"
          type="text"
          name="title"
          required
          className="w-full px-3 py-2 rounded-2xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-invalid={Boolean(titleError)}
          aria-describedby={titleError ? 'title-error' : undefined}
        />
        {titleError && (
          <p
            id="title-error"
            role="alert"
            className="mt-2 text-sm text-red-600"
          >
            {titleError}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="description" className="mb-2 block">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="w-full rounded-xl border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="status" className="mb-2 block">
          Status
        </label>
        <select
          id="status"
          name="status"
          defaultValue="todo"
          className="w-full rounded-xl border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div>
        <label htmlFor="priority" className="mb-2 block">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          defaultValue="medium"
          className="w-full rounded-xl border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label htmlFor="dueDate" className="mb-2 block">
          Due date
        </label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          required
          className="w-full rounded-xl border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        />
      </div>
      <Button type="submit" variant="primary" className="mt-4">
        Create Task
      </Button>
    </form>
  );
}

export default TaskForm;
