import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <LoadUsers />
    </div>
  );
}
export default App;

// ✅ Fetch Tasks, Sort & Filter with a Dropdown
function LoadUsers() {
  const [tasks, setTasks] = useState([]); // Stores tasks from API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('all'); // ✅ Default filter is "All"

  useEffect(() => {
    async function fetchTasks() {
      try {
        setLoading(true);
        setError('');

        const res = await fetch('http://localhost:5000/tasks');
        if (!res.ok) throw new Error('Failed to fetch tasks');

        const data = await res.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  // ✅ Derived State: Filter Tasks based on `sortBy`
  const filteredTasks = tasks.filter((task) => {
    if (sortBy === 'completed') return task.status === 'completed';
    if (sortBy === 'pending') return task.status === 'incomplete';
    return true; // Default to all tasks
  });

  return (
    <>
      <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <TaskTable tasks={filteredTasks} />}
    </>
  );
}

// ✅ Sorting Dropdown Component
function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div>
      <label>Filter Tasks: </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed Tasks</option>
        <option value="pending">Pending Tasks</option>
      </select>
    </div>
  );
}

// ✅ Task Table Component (Displays tasks in a table)
function TaskTable({ tasks }) {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No tasks found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

// ✅ Loader Component
function Loader() {
  return <p className="loader">Loading .. </p>;
}

// ✅ Error Message Component
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>XXXX</span> {message}
    </p>
  );
}
