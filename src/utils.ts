import * as Yup from 'yup'

const validateName = Yup.string()
  .min(2, 'Too short')
  .max(25, 'Too long')
  .required('Please enter your name')

const validateEmail = Yup.string()
  .email('Must be a valid email')
  .required('Please enter your e-mail address')

const validateService = Yup.string().required('Please choose a service')

export { validateName, validateEmail, validateService }
