import { ListItem } from './ListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ContactList>
      {contacts.map(iD => {
        return <ListItem key={iD} />;
      })}
    </ContactList>
  );
};
