import React from 'react';
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
    .required()
    .min(2)
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      excludeEmptyString: false,
    }),
  number: yup
    .string()
    .required()
    .min(13)
    .max(13)
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
    addContact(values);
    // console.log(values);
    resetForm();
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

        <label htmlFor="number">
          Number:
          <StyledInput
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorForm name="number" />
        </label>
        <StyledButton type="submit">Add contact</StyledButton>
      </Form>
    </Formik>
  );
};

export default AddContactForm;
