import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './AppContext';

// Stef
export function ContactsList() {
  const {
    contacts,
    setContacts,
    error,
    setError,
    isLoading,
    setIsLoading,
    contact,
    setContact,
  } = useContext(AppContext); // Access Global State

  function onSelectContact(obj) {
    console.log(obj);
    setContact(obj);
  }
  useEffect(() => {
    async function fetchContacts() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch('https://dummyjson.com/users');
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const data = await res.json();
        setContacts(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Contacts List</h2>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Contact List */}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => onSelectContact(contact)}
              className="contact-button"
            >
              {contact.firstName} {contact.lastName}
            </button>
          </li>
        ))}
      </ul>
      {/* Display The Selected Contact */}
      {contact && (
        <div className="selected-contact">
          <h3> Selected Contact</h3>
          <p>
            {contact.firstName} {contact.lastName}
          </p>
        </div>
      )}
    </div>
  );
}

export function ClickedContact() {
  const { contact } = useContext(AppContext);

  if (!contact) return <p>No contact selected yet.</p>; // Prevents crashes

  return (
    <div className="clicked-contact">
      <h3>Selected Contact:</h3>
      <p>
        <strong>Name:</strong> {contact.firstName} {contact.lastName}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
    </div>
  );
}

export function FoundContact() {
  const { contacts, query } = useContext(AppContext); // Access contacts & query

  const queryLower = query.toLowerCase().trim(); // Convert query to lowercase
  const filteredContacts = contacts.filter(
    (contact) => contact.firstName.toLowerCase().trim() === queryLower
  );

  if (!query) return <p> Start typing to search for contacts .. </p>;

  return (
    <div className="found-contact">
      <h3> Search results</h3>
      {filteredContacts.length === 0 ? (
        <p> No contacts found </p>
      ) : (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.firstName} {contact.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
