import { GoSearch } from 'react-icons/go';

function Header() {
  return (
    <header className="flex justify-end border-b border-slate-200 p-4 md:p-6">
      <div className="w-full md:max-w-xl">
        <label
          htmlFor="term"
          className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
        >
          <span className="sr-only">Search tasks</span>
          <GoSearch className="shrink-0 text-slate-400" aria-hidden="true" />
          <input
            id="term"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            type="search"
            placeholder="Search tasks..."
          />
        </label>
      </div>
    </header>
  );
}

export default Header;
