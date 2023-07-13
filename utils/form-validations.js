import * as yup from 'yup';
import api from '../api/baseApi';

export const generateSchema = params => {
  const keys = Object?.keys(params);
  const schema = {};
  keys?.map(key => {
    if (key.indexOf('email') !== -1) {
      schema[key] = yup
        ?.string()
        ?.email('Email must be valid')
        ?.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter valid email')
        ?.required('Email address is required');
      // ?.test('unique-email', 'Email already exists', async function (value) {
      //   const response = await api.post('/api/v1/auth', {
      //     email: value,
      //   });
      //   console.log(response.data);
      //   const errorMessage = 'Email already exists';
      //   const {path, createError} = this;
      //   const emailTakenMessage = response?.data?.message?.includes(
      //     'Email has already been taken',
      //   );
      //   const emailExists = response?.data?.success;
      //   if (emailTakenMessage && emailExists) {
      //     return createError({path, message: errorMessage});
      //   }
      // });
    } else if (key.indexOf('password') !== -1) {
      schema[key] = yup
        ?.string()
        ?.min(6, 'Password should be at least 6 characters long.')
        ?.required('Password is required');
    } else if (key.indexOf('confirmPassword') !== -1) {
      schema[key] = yup
        ?.string()
        ?.min(6, 'Confirm password should be at least 6 characters long.')
        ?.oneOf([yup.ref('password'), null], 'Passwords must match')
        ?.required('Confirm password is required');
    } else if (key.indexOf('firstName') !== -1) {
      schema[key] = yup
        ?.string()
        ?.max(30)
        ?.matches(
          /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)?$/,
          'Please enter valid first name',
        )
        ?.required('First name is required');
    } else if (key.indexOf('lastName') !== -1) {
      schema[key] = yup
        ?.string()
        ?.max(30)
        ?.matches(
          /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)?$/,
          'Please enter valid last name',
        )
        ?.required('Last name is required');
    } else {
      schema[key] = yup?.string().required(`${key} is required`);
    }
  });
  return yup.object()?.shape(schema);
};
