import { useState } from 'react';
import { mockTasks } from '../data/mockTasks';
import type { NewTask } from '../types/task';
import TaskBoard from '../components/TaskBoard/TaskBoard';
import Button from '../components/Button/Button';
import TaskDialog from '../components/TaskDialog/TaskDialog';

function TasksPage() {
  const [tasks, setTasks] = useState(mockTasks);
  const [isOpen, setIsOpen] = useState(false);

  const openTaskDialog = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const createTask = (task: NewTask) => {
    const { title, description, status, priority, dueDate } = task;
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      status,
      priority,
      dueDate,
    };
    setTasks((prev) => [...prev, newTask]);
    closeModal();
  };
  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Task board</h1>
        <Button onClick={openTaskDialog}>Add task</Button>
      </div>
      <p className="mb-6">Your workspace, ready.</p>
      <TaskBoard tasks={tasks} />
      <TaskDialog isOpen={isOpen} onClose={closeModal} onCreate={createTask} />
    </>
  );
}

export default TasksPage;
