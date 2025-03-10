import React from 'react';
import { Search } from './Search';

export function NavBar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
    </nav>
  );
}

function Logo() {
  return <h1> 😎 </h1>;
}
