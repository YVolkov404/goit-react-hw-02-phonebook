import { Item, Name, Number, DeleteBtn, Icon } from './ListItem.styled';

export const ListItem = ({ name, number }) => {
  return (
    <Item>
      <Name>{name} :</Name>
      <Number>{number}</Number>
      <DeleteBtn>
        <Icon size="19px" />
      </DeleteBtn>
    </Item>
  );
};
