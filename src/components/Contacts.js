import { nanoid } from 'nanoid';

export const Contacts = ({ title, contacts }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {contacts.map(contact => (
          <li key={nanoid()}>{contact}</li>
        ))}
      </ul>
    </>
  );
};
