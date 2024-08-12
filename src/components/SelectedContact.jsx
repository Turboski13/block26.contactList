import React, {useState, useEffect} from "react"; 

export default function selectedContactId() { 
    const [selectedContactID, setSelectedContactId] = useState(null);

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`
                );
                const result = await response.json();
                setContacts(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts();
    }, [contactId]);

    if (!contact) {
        return <div>Loading...</div>;
    }


    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }

  