export const Form = ({ name }) => {
  return (
    <form>
      <input type="text" name="name" required />
      <button type="submit">Add contact</button>
    </form>
  );
};
