// import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form } from './Form';
// import { ContactList } from './ContactList';
// import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleOnSubmit = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
    console.log(this.state);
  };

  render() {
    // const { contacts } = this.state;
    // const iD = nanoid(3);

    return (
      <>
        <h1>Name</h1>
        <Form onSubmit={this.handleOnSubmit} />

        <h2>Contacts</h2>
        {/* <ContactList contacts={contacts} id={iD} /> */}
      </>
    );
  }
}
