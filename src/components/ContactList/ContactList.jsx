import { nanoid } from 'nanoid';
import { ListItem } from '../ListItem/ListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ name, number }) => {
        return <ListItem key={nanoid(3)} name={name} number={number} />;
      })}
    </List>
  );
};
