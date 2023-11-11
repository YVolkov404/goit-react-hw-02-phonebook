import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleOnSubmit = e => {
    e.preventDefault();

    let { name, number } = this.state;

    const form = e.currentTarget;
    const input = e.currentTarget.elements;
    console.log(input);
    name = input.name.value;
    number = input.number.value;

    this.setState(() =>
      this.props.onSubmit({
        name: name,
        number: number,
      })
    );
    form.reset();
  };

  render() {
    return (
      <form
        onSubmit={this.handleOnSubmit}
        name={this.state.name}
        number={this.state.number}
      >
        <input type="text" name="name" required />
        <input type="tel" name="number" required />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
