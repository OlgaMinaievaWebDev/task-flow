import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)]">
      <Sidebar />
      <div className="min-w-0">
        <Header />
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
