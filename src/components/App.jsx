import { Component } from 'react';
import { Form } from './Form';
import { Contacts } from './Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onChangeInput = e => {
    e.preventDefault();
    this.setState(() => {
      return { contacts: [this.state.name] };
    });
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <h1>Name</h1>
        <Form onChange={this.onChangeInput} />

        <h2>Contacts</h2>
        {contacts.length > 0 && <Contacts contacts={contacts} name={name} />}
      </>
    );
  }
}
