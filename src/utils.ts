import * as Yup from 'yup'

const validateName = Yup.string()
  .min(2, 'Too short')
  .max(25, 'Too long')
  .required('Please enter your name')

const validateEmail = Yup.string()
  .email('Must be a valid email')
  .required('We need this info')

const validateService = Yup.string().required('Choose one')

export { validateName, validateEmail, validateService }
