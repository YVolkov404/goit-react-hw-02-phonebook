import { Component } from 'react';

export class Form extends Component {
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
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          required
        />
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleOnChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
