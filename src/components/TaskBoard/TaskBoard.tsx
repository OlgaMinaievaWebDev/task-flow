import { mockTasks } from '../../data/mockTasks';
import TaskColumn from '../TaskColumn/TaskColumn';

const todoTasks = mockTasks.filter((task) => task.status === 'todo');
const inProgressTasks = mockTasks.filter(
  (task) => task.status === 'in-progress',
);
const doneTasks = mockTasks.filter((task) => task.status === 'done');
function TaskBoard() {
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
