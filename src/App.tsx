import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import TasksPage from './pages/TasksPage';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <TasksPage />
          </MainLayout>
        }
      />
    </Routes>
  );
}
