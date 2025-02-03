import { useState, useEffect } from 'react';
import './App.css';
import { CardList, Navbar } from './Card';
function App() {
  const sampleCards = [
    {
      id: 1,
      title: 'Learn React',
      description:
        'Complete the official React documentation and build a simple project.',
    },
    {
      id: 2,
      title: 'Study Redux',
      description:
        'Understand how Redux works and implement state management in a sample app.',
    },
    {
      id: 3,
      title: 'Practice Node.js',
      description:
        'Build a backend server with CRUD APIs using Node.js and Express.',
    },
    {
      id: 4,
      title: 'Explore TypeScript',
      description:
        'Learn the basics of TypeScript and refactor an existing project with it.',
    },
    {
      id: 5,
      title: 'Learn MongoDB',
      description:
        'Set up a MongoDB database and practice basic CRUD operations.',
    },
    {
      id: 6,
      title: 'Build a Portfolio Website',
      description:
        'Design and develop a personal portfolio using React and Tailwind CSS.',
    },
  ];
  const users = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];
  const [cards, setCards] = useState(sampleCards);
  const [query, setQuery] = useState('');

  // Filter to find the Number
  useEffect(
    () => setCards(sampleCards.filter((item) => item.id === Number(query))),
    [query]
  );
  return (
    <div className="app">
      <h1>
        <Navbar query={query} setQuery={setQuery} />
        <CardList cards={cards} />
      </h1>
    </div>
  );
}
export default App;

// Okay so lets load this.
