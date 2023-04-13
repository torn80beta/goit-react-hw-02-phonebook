import styled from '@emotion/styled';

export const StyledSectionFilter = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 30px;
  margin-bottom: 40px;
`;

export const StyledFilterInput = styled.input`
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
