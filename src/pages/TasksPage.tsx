import TaskBoard from '../components/TaskBoard/TaskBoard';

function TasksPage() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold">Task board</h1>
      <p className="mb-6">Your workspace, ready.</p>
      <TaskBoard />
    </>
  );
}

export default TasksPage;
