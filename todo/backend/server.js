const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for frontend requests
app.use(cors());

// Dummy task data
const tasks = [
  {
    id: 1,
    title: 'Complete React Project',
    description: 'Build a task viewer dashboard',
    status: 'incomplete',
    createdAt: '2025-03-01',
  },
  {
    id: 2,
    title: 'Fix API Calls',
    description: 'Ensure correct handling of responses',
    status: 'completed',
    createdAt: '2025-02-28',
  },
  {
    id: 3,
    title: 'Design UI Components',
    description: 'Create reusable TaskList, TaskItem components',
    status: 'incomplete',
    createdAt: '2025-03-02',
  },
  {
    id: 4,
    title: 'Implement Filters',
    description: 'Add search & filter for completed/incomplete tasks',
    status: 'incomplete',
    createdAt: '2025-03-03',
  },
];

// GET /tasks - Fetch all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
