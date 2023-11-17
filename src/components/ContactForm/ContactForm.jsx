import { Component } from 'react';
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleOnChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Label htmlFor="nameId">Name</Label>
        <Input
          id="nameId"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          required
        />
        <Label htmlFor="numberId">Number</Label>
        <Input
          id="numberId"
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleOnChange}
          required
        />
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    );
  }
}
