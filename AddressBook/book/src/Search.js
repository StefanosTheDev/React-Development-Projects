import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './AppContext';

export function Search() {
  const { query, setQuery } = useContext(AppContext); // 🔥 Access Global Query
  // Test
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
