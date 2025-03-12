import React from 'react';
import { NavBar } from './NavBar';
import { ContactsList } from './ContactList';
import { Box } from './Box';

export function App() {
  return (
    <>
      <NavBar />
      <ContactsList />
      <div className="box-container">
        <Box />
        <Box />
      </div>
    </>
  );
}
