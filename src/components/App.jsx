import AddContactForm from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { Title } from './Title/Title';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';
const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    this.setState(
      prevState => ({
        // name: name,
        // number: number,
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: name, number: number },
        ],
      })
      // () => console.log(this.state.contacts)
    );
  };

  handleFilterChange = event => {
    this.setState(
      { filter: event.target.value }
      // () => console.log(this.state.filter)
    );
  };

  render() {
    return (
      <>
        <Title title={'Phonebook'} />
        <AddContactForm addContact={this.handleAddContact} />
        <Title title={'Contacts'} />
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <Contacts contacts={this.state.contacts} filter={this.state.filter} />
      </>
    );
  }
}

export default App;
