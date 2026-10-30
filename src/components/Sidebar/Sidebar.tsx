import { GoGrabber, GoCodeReview, GoTools } from 'react-icons/go';
import { NavLink } from 'react-router';

const navItems = [
  {
    label: 'Home',
    icon: <GoGrabber />,
    path: '/',
  },
  {
    label: 'Tasks',
    icon: <GoCodeReview />,
    path: '/tasks',
  },
  {
    label: 'Settings',
    icon: <GoTools />,
    path: '/settings',
  },
];

function Sidebar() {
  const renderNavItems = navItems.map((item) => {
    return (
      <li key={item.label}>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg px-3 py-2 ${isActive ? 'bg-blue-100 text-blue-400' : 'text-gray-600'}`
          }
          to={item.path}
        >
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </NavLink>
      </li>
    );
  });
  return (
    <aside className="w-full shrink-0 border-b border-slate-200 bg-slate-50 p-4 md:w-60 md:border-r md:border-b-0 md:p-6">
      <h2 className="text-xl font-semibold">TaskFlow+</h2>
      <nav aria-label="Sections" className="mt-6">
        <ul className="flex flex-col gap-4">{renderNavItems}</ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
