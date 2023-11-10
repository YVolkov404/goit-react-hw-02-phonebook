import { ListItem } from './ListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ContactList>
      {contacts.map(({ iD, name, number }) => {
        return <ListItem key={iD} name={name} number={number} />;
      })}
    </ContactList>
  );
};
