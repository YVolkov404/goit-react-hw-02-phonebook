import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  padding-left: 5px;
  font-size: 22px;
  color: aqua;
`;

export const Input = styled.input`
  width: auto;
  height: 32px;
  font-size: 18px;
  padding-left: 10px;
  outline: 2px solid blanchedalmond;
  caret-color: aqua;

  &:focus {
    color: darkcyan;
    font-weight: 500;
  }
`;

export const SubmitBtn = styled.button`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 8px;
  background-color: blanchedalmond;
  border: none;
  box-shadow: 3px -3px 3px -1px rgba(255, 235, 205, 0.64);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: none;
    color: darkcyan;
  }
`;
