import AddContactForm from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { Title } from './Title/Title';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';
// import PropTypes from 'prop-types';
const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkContact = (arr, newName) => {
    return arr.some(({ name }) => {
      // console.log(name);
      return newName.toLowerCase() === name.toLowerCase();
    });
  };

  handleAddContact = ({ name, number }) => {
    const check = this.checkContact(this.state.contacts, name);
    // console.log(check);
    if (check) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(
      prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: name, number: number },
        ],
      })
      // () => console.log(this.state.contacts)
    );
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = event => {
    this.setState(
      { filter: event.target.value }
      // () => console.log(this.state.filter)
    );
  };

  localContacts = () => localStorage.getItem('PHONEBOOK_CONTACTS') || [];

  componentDidMount() {
    if (localStorage.getItem('PHONEBOOK_CONTACTS')) {
      this.setState(() => ({
        contacts: JSON.parse(localStorage.getItem('PHONEBOOK_CONTACTS')),
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        'PHONEBOOK_CONTACTS',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  render() {
    return (
      <>
        <Title title={'Phonebook'} />
        <AddContactForm addContact={this.handleAddContact} />
        <Title title={'Contacts'} />
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
