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

  filterChangeHandler = contactName => {
    console.log(contactName);
    this.setState({ filter: contactName });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContactName = contacts.filter(contactName => {
      const hasContactName = contactName.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return hasContactName;
    });

    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <SubTitle>Contacts</SubTitle>

        <Filter filter={filter} onChangeFilter={this.filterChangeHandler} />

        {contacts.length > 0 && <ContactList contacts={filteredContactName} />}
      </Container>
    );
  }
}
