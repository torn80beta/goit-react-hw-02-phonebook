import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { StyledInput, StyledErrorText } from './AddContactForm.styled';
import * as yup from 'yup';

const initialValues = {
  name: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2)
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      excludeEmptyString: false,
    }),
});

const ErrorForm = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <StyledErrorText>{message}</StyledErrorText>}
    />
  );
};

const AddContactForm = () => {
  const handleNameSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleNameSubmit}
    >
      <Form>
        <label htmlFor="name">
          Name:
          <StyledInput
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <button type="submit">Submit</button>
          <ErrorForm name="name" />
        </label>
      </Form>
    </Formik>
  );
};

export default AddContactForm;
