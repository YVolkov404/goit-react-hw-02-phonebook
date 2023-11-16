import { Component } from 'react';
import { Form } from './Form';
import { ContactList } from './ContactList';
// import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState({ contacts: [data] });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Name</h1>
        <Form onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {contacts.length > 0 && <ContactList contacts={contacts} />}
      </div>
    );
  }
}
