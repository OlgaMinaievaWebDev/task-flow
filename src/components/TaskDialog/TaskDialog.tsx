import { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import TaskForm from './TaskForm/TaskForm';
import type { NewTask } from '../../types/task';

interface TaskDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (task: NewTask) => void;
}

function TaskDialog({ isOpen, onClose, onCreate }: TaskDialogProps) {
  const dialogEl = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogEl.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl bg-white p-6 shadow-xl backdrop:bg-slate-900/40"
      onClose={onClose}
      ref={dialogEl}
      aria-labelledby="task-dialog-title"
    >
      <h2 className="mb-6 text-xl font-semibold" id="task-dialog-title">
        Add Task
      </h2>
      <TaskForm onCreate={onCreate} />
      <footer className="mt-6 flex justify-end">
        <Button type="button" variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </footer>
    </dialog>
  );
}

export default TaskDialog;
