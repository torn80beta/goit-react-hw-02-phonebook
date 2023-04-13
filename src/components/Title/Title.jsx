import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitleH2 } from './Title.styled';

export const Title = ({ title }) => {
  return <StyledTitleH2>{title}</StyledTitleH2>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
