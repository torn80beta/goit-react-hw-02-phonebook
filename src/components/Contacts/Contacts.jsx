import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDeleteContactButton,
  StyledContactListItemLi,
  StyledContactsListUL,
} from './Contacts.styled';

export const Contacts = ({ contacts, filter, onDeleteContact }) => {
  // console.log(filter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <StyledContactsListUL>
      {filteredContacts.map(({ id, name, number }) => (
        <StyledContactListItemLi key={id}>
          <p>
            {name}: {number}
          </p>
          <StyledDeleteContactButton onClick={() => onDeleteContact(id)}>
            Delete
          </StyledDeleteContactButton>
        </StyledContactListItemLi>
      ))}
    </StyledContactsListUL>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
