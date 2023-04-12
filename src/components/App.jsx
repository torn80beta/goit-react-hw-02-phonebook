import AddContactForm from './AddContactForm/AddContactForm';
import { Title } from './Title/Title';
import { Contacts } from './Contacts/Contacts';
const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleAddContact = ({ name, number }) => {
    this.setState(
      prevState => ({
        name: name,
        number: number,
        contacts: [...prevState.contacts, { name: name, number: number }],
      })
      // () => console.log(this.state.contacts)
    );
  };

  render() {
    return (
      <>
        <Title title={'Phonebook'} />
        <AddContactForm addContact={this.handleAddContact} />
        <Title title={'Contacts'} />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
