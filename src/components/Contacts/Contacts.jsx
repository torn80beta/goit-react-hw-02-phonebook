import React from 'react';

export const Contacts = ({ contacts, filter, onDeleteContact }) => {
  // console.log(filter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
