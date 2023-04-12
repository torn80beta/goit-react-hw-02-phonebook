import React from 'react';
import { nanoid } from 'nanoid';

export const Contacts = ({ contacts }) => {
  //   console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, number }) => (
        <li key={nanoid()}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};
