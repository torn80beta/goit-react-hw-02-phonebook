import React from 'react';
import PropTypes from 'prop-types';
import { StyledSectionFilter, StyledFilterInput } from './Filter.styled';

const Filter = ({ onChange }) => {
  //   console.log(onChange);
  return (
    <StyledSectionFilter>
      <p>Find contacts by name</p>
      <StyledFilterInput type="text" name="filter" onChange={onChange} />
    </StyledSectionFilter>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
