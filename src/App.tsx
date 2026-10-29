import { Route, Routes } from 'react-router';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <p className="font-semibold text-[#277367]">
              Your workspace, ready.
            </p>
            <h1>Task Flow</h1>
            <p>A fresh start for a more organized day.</p>
          </main>
        }
      />
      <Route
        path="*"
        element={
          <main>
            <h1>Page not found</h1>
            <a href="/">Back to home</a>
          </main>
        }
      />
    </Routes>
  );
}
