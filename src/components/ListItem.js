export const ListItem = ({ name, number }) => {
  return (
    <ListItem>
      <span>{name}</span>
      <span>{number}</span>
      <button>Delete</button>
    </ListItem>
  );
};
