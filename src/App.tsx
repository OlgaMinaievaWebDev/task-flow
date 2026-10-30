import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import TasksPage from './pages/TasksPage';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
