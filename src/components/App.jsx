import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container, Title, SubTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(state => {
      return { contacts: [...state.contacts, data] };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <SubTitle>Contacts</SubTitle>

        <Filter />

        {contacts.length > 0 && <ContactList contacts={contacts} />}
      </Container>
    );
  }
}
