import { Item, Name, Number, DeleteBtn, Icon } from './ListItem.styled';

export const ListItem = ({ name, number, deleteContact }) => {
  return (
    <Item>
      <Name>{name} :</Name>
      <Number>{number}</Number>
      <DeleteBtn onClick={() => deleteContact(number)}>
        <Icon size="19px" />
      </DeleteBtn>
    </Item>
  );
};
