import { Component } from 'react';
import { Form } from './Form';
import { Contacts } from './Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <Form title="Name" username={name} />
        {contacts.length > 0 && (
          <Contacts title="Contacts" contacts={contacts} />
        )}
      </>
    );
  }
}
