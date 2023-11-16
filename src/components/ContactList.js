import { nanoid } from 'nanoid';
import { ListItem } from './ListItem';

export const ContactList = ({ contacts }) => {
  let iD = nanoid(3);

  return (
    <ContactList>
      {contacts.map(({ name, number }) => {
        return <ListItem key={iD} name={name} number={number} />;
      })}
    </ContactList>
  );
};
