import { useState } from 'react'
import ContactList from "./components/ContactList"
import './App.css'

const [contacts, setContacts] = useState(dummyContacts)

export default function App() {
  return (
    <>
      <ContactList />
    </>
  );
}
