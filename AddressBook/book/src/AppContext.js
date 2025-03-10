import React, { createContext, useState } from 'react';

// 1️⃣ Create Context
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState('');
  const [query, setQuery] = useState('');
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        contacts,
        setContacts,
        isOpen,
        setIsOpen,
        contact,
        setContact,
        query,
        setQuery, // 🔥 Added Search Query State
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
