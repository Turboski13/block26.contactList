import React, {useState, useEffect} from "react"; 

export default function selectedContactId() { 
    const [selectedContactID, setSelectedContactId] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`
                );
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
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
