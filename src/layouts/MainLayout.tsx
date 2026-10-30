import type { ReactNode } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

type MainLayoutProps = {
  children: ReactNode;
};
function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-dvh flex flex-col md:flex-row">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Header />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
