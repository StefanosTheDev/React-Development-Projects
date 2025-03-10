import React from 'react';
import { ContactsList } from './ContactList';
export function Box({ children }) {
  return (
    <div className="container">
      <div className="Box">{children}</div>
    </div>
  );
}
