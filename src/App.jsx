import "./App.css";
import { useState } from "react";
import ContactList from "./ContactList";
import SelectedContact from "./SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}