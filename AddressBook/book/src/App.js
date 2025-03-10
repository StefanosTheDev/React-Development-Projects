import React, { useEffect, useContext } from 'react';
import { NavBar } from './NavBar';
import { ClickedContact, ContactsList, FoundContact } from './ContactList';
import { Box } from './Box';
import { AppProvider, AppContext } from './AppContext';
import { Search } from './Search';

export function App() {
  return (
    <AppProvider>
      {/* NAV BAR */}
      <NavBar>
        <Search />
      </NavBar>

      <div className="box-container">
        {/* Main Contact List */}
        <Box>
          <Search />
          <ContactsList />
        </Box>

        {/* Populate Clicked Contacts */}
        <Box>
          <ClickedContact />
        </Box>

        {/* Populate Searched Contact */}
        <Box>
          <FoundContact />
        </Box>
      </div>
    </AppProvider>
  );
}
