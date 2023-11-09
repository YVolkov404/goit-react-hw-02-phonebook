export const Form = ({ title }) => {
  return (
    <form>
      <label>{title}</label>
      <input type="text" name="name" required />
      <button type="submit">Add contact</button>
    </form>
  );
};
