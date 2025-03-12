import React, { useEffect, useState } from 'react';

export function ContactsList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [contacts, setContacts] = useState([]);

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
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
