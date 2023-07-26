import * as yup from 'yup';

export const generateSchema = (params, screenName) => {
  // const keys = Object?.keys(params);
  const keys = Object.keys(params).filter(key => key);
  const schema = {};
  const capitalizeFirstLetter = str =>
    `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  keys?.map(key => {
    if (key.indexOf('email') !== -1) {
      schema[key] = yup
        ?.string()
        ?.email('Email must be valid')
        ?.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter valid email')
        ?.required('Email address is required');
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
    } else if (key.indexOf('cardNumber') !== -1) {
      schema[key] = yup
        ?.string()
        ?.max(16)
        ?.required('Required')
        ?.matches(/^[0-9]+$/, 'Only Numbers are allowed');
    } else if (key.indexOf('cvv') !== -1) {
      schema[key] = yup
        ?.number()
        ?.typeError('Only Numbers are allowed')
        ?.required('Required');
    } else if (key.indexOf('expiry') !== -1) {
      schema[key] = yup
        ?.number()
        ?.typeError('Only Numbers are allowed')
        ?.required('Required');
    } else if (key.indexOf('cardHolderName') !== -1) {
      schema[key] = yup?.string()?.required('Required');
    }
    // else if (key.indexOf('country') !== -1) {
    //   schema[key] = yup?.string()?.required('Country/Region is required');
    // }
    else if (key.indexOf('postalCode') !== -1) {
      schema[key] = yup
        ?.number()
        ?.typeError('Only Numbers are allowed')
        ?.required('Postal Code is required');
    } else if (key.indexOf('phone') !== -1) {
      schema[key] = yup
        ?.number()
        ?.typeError('Only Numbers are allowed')
        ?.required('Phone Number is required');
    } else {
      schema[key] = yup
        ?.string()
        .required(`${capitalizeFirstLetter(key)} is required`);
    }
  });
  if (screenName === 'CheckoutScreen') {
    schema['country'] = yup.string().required('Country/Region is required');
  }
  return yup.object()?.shape(schema);
};
