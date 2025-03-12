import React from 'react';
import { Search } from './Search';

export function NavBar() {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
    </nav>
  );
}

function Logo() {
  return <h1> 😎 </h1>;
}
