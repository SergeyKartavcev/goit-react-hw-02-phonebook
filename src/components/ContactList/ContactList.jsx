import React from "react";

function ContactList({contacts, onDeleteContact}) {
    return (
      <ul>
        {contacts.map(({id, name, number}) =>
          <li key={id}>
           <p> {name}: {number} </p>
            <button
            type="button"
            onClick={() => onDeleteContact(id)}
          />
          </li>
        )}
      </ul>
    );
    }
  export default ContactList