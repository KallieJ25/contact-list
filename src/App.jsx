import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      <h1>Contact List</h1>
      <div className="container">
        <ContactList setSelectedContactId={setSelectedContactId} />
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      </div>
    </div>
  );
}