import TaskColumn from '../TaskColumn/TaskColumn';
import type { Task } from '../../types/task';

interface TaskBoardProps {
  tasks: Task[];
}

function TaskBoard({ tasks }: TaskBoardProps) {
  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
  const doneTasks = tasks.filter((task) => task.status === 'done');

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <TaskColumn title="To Do" tasks={todoTasks} status="todo" />
      <TaskColumn
        title="In Progress"
        tasks={inProgressTasks}
        status="in-progress"
      />
      <TaskColumn title="Done" tasks={doneTasks} status="done" />
    </div>
  );
}

export default TaskBoard;
