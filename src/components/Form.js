export const Form = ({
  handleOnSubmit,
  handleOnChangeName,
  handleOnChangeNumber,
}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <input type="text" name="name" onChange={handleOnChangeName} required />
      <input
        type="tel"
        name="number"
        onChange={handleOnChangeNumber}
        required
      />
      <button type="submit">Add contact</button>
    </Form>
  );
};
