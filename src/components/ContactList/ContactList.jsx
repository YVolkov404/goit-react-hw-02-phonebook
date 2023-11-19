import { uid } from 'uid';
import { ListItem } from '../ListItem/ListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number }) => {
        return (
          <ListItem
            key={uid(3)}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </List>
  );
};
