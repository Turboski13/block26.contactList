import React from "react"; 

export default function selectedContactId() { 
    const [selectedContactID, setSelectedContactId] = useState(dummyContacts);
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }