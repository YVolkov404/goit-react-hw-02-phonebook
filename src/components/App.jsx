import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form } from './Form';
import { ContactList } from './ContactList';
// import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };

  handleOnChangeName = e => {
    this.setState(newName => {
      return {
        name: newName,
      };
    });
  };

  handleOnChangeNumber = e => {
    this.setState(newNumber => {
      return {
        number: newNumber,
      };
    });
  };

  // -------------------------------------------------------------

  render() {
    const { contacts, name, number } = this.state;
    const iD = nanoid(3);

    return (
      <>
        <h1>Name</h1>
        <Form
          handleOnSubmit={this.handleOnSubmit}
          handleOnChangeName={this.handleOnChangeName}
          handleOnChangeNumber={this.handleOnChangeNumber}
        />

        <h2>Contacts</h2>
        {/* <Filter filter={filter} /> */}
        <ContactList contacts={contacts} id={iD} name={name} number={number} />
      </>
    );
  }
}
