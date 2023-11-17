import { Search, Label, Input } from './Filter.styled';

export const Filter = () => {
  return (
    <Search>
      <Label htmlFor="filterId">Find contacts by name</Label>
      <Input id="filterId" type="text" name="name" />
    </Search>
  );
};
