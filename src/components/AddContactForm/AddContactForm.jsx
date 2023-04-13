import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import {
  StyledInput,
  StyledErrorText,
  StyledButton,
  StyledLabel,
} from './AddContactForm.styled';
import * as yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field.')
    .min(2, 'Name must be at least 13 characters.')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message: 'Name must match the following: "a-z, A-Z, а-я, А-Я".',
      excludeEmptyString: false,
    }),
  number: yup
    .string()
    .required('Number is a required field.')
    .min(13, 'Number must be at least 13 characters.')
    .max(13, 'Number must be at most 13 characters.')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Number must contain only numbers from "0" to "9" and "+" or "-" symbols.',
        excludeEmptyString: false,
      }
    ),
});

const ErrorForm = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <StyledErrorText>{message}</StyledErrorText>}
    />
  );
};

const AddContactForm = ({ addContact }) => {
  const handleNameSubmit = (values, { resetForm }) => {
    // console.log(values);
    addContact(values);
    resetForm();
  };

  handleNameSubmit.propTypes = {
    values: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    resetForm: PropTypes.func.isRequired,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleNameSubmit}
    >
      <Form>
        <StyledLabel htmlFor="name">
          Name:
          <StyledInput
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorForm name="name" />
        </StyledLabel>

        <StyledLabel htmlFor="number">
          Number:
          <StyledInput
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorForm name="number" />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </Form>
    </Formik>
  );
};

export default AddContactForm;

ErrorForm.propTypes = {
  name: PropTypes.string.isRequired,
};

AddContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

initialValues.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
