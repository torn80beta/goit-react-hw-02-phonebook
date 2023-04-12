import AddContactForm from './AddContactForm/AddContactForm';
const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <h1>Phone-book</h1>
        <AddContactForm />
      </>
    );
  }
}

export default App;
