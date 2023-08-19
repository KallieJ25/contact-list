import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`${apiUrl}${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  console.log('Contact:', contact);

  return (
    <div>
      {contact ? (
        <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => setSelectedContactId(null)}>Back to List</button>
        </div>
      ) : (
        <p>Select a contact to view details.</p>
      )}
    </div>
  );
}