import React, { useState } from 'react';

export function Search() {
  const [query, setQuery] = useState('');

  return (
    <input
      className="search"
      type="text"
      placeholder="Search Contacts"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
