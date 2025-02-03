/**
 * 
You would have a Card Component.
You would have a Form Component (That would be universal. You would be able to populate, Delete, Create, Update)
You would have a Search Component.
You would have a Star Rating Component on the card as well
You would have a Navbar Component. ** DONE
You would have a Logo Component. ** DONE 
 */

import { useState } from 'react';

/**TODO
 *
 */

// Types Of State Are You Going TO Be Used.
// Component Structure.

// Define the variables
// Define Global States
// Define Local States
// Define Derived States / Stuff that will be passed down as children?

// Define The App Adgenda, A User will be able to see a loaded set of Cards. Cards will have
// ID, Description, Title. User will be able to STAR a card. if they STAR a card it will be passed
// To a New Section that will have "Starred Cards".
// User will be able to search universially Both Cards in the regular section and started.
// The User will be able to Add a Card, Delete A Card, Update A Card.]
// Navbar will be basic just VIEW
// Logo will be a basic render.

/**
 * CARD Component.
 * STATE: cards,
 * Children Components: StarRating.
 *  */

// MVP -> Final Product.

// CARD COMPONENT
// ALL THIS IS GOING IS TO JUST ACCEPT THE CARDS AND RENDER.
// WERE NEED TO

// WERE GOING To need a function that maniplualtes the cards and returns that CARD Component.
//

export function CardList({ cards }) {
  // !!cards?.length swag way to do this.
  return (
    <div>
      {!!cards?.length ? (
        <div>
          {cards.map((card) => (
            <div key={card.id} className="card">
              <h1> {card.title} </h1>
              <p> {card.description} </p>
            </div>
          ))}
        </div>
      ) : (
        <h1> Cards Do Not Exist </h1>
      )}
    </div>
  );
}

// LOGO  IS CHILD. // NAVBAR IS PARENT.
export function Navbar({ query, setQuery }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar query={query} setQuery={setQuery} />
    </nav>
  );
}

// Logo Component
export function Logo() {
  return (
    <div className="logo">
      <h1> LOGO COMPONENT </h1>
    </div>
  );
}

// Search Component
// What goes into this.
// Query passed in.

// Handle Change Events.

// INPUT -> Query
// OUTPUT -> IF the QUERY has an ID that is existing in the Cards array.
// OUTPUT -> Return That OBJECT in it's Card Form.
// OUTPUT -> NONE
export function SearchBar({ query, setQuery }) {
  const [_query, _setQuery] = useState(query);
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search Cards"
        onChange={(e) => _setQuery(e.target.value)}
      />
      <button onClick={() => setQuery(_query)} className="search-button">
        Search
      </button>
    </div>
  );
}
