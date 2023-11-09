import { nanoid } from 'nanoid';

export const Contacts = ({ contacts, name }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid()} name={name}>
          {contact.name}
        </li>
      ))}
    </ul>
  );
};
