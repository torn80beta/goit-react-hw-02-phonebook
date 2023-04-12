import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const StyledInput = styled(Field)`
  /* position: relative; */
  margin: 0 20px;
  padding: 3px 10px;
  width: 250px;
  height: 20px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;

  &:focus {
    outline: 1px solid greenyellow;
  }
`;

export const StyledErrorText = styled.p`
  display: block;
  font-size: 18px;
  margin-top: 20px;
  color: red;
`;
