import styled from 'styled-components';

export const Search = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  padding-left: 5px;
  font-size: 20px;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 7px;
  text-decoration-color: blanchedalmond;
  color: aqua;
`;

export const Input = styled.input`
  width: auto;
  height: 32px;
  font-size: 18px;
  padding-left: 10px;
  outline: 2px solid aqua;
  caret-color: aqua;

  &:focus {
    color: darkcyan;
    font-weight: 500;
  }
`;
