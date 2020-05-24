import { Form, Formik } from 'formik'
import React, { useCallback } from 'react'
import * as Yup from 'yup'
import Field from '../Field'

export type EmailFormValues = {
  email: string
}

const EmailFormSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too short')
    .max(25, 'Too long')
    .required('We need this info'),
})

function EmailForm() {
  const handleSubmit = useCallback((values, actions) => {
    console.log('SUBMITTED', { values, actions })
  }, [])

  const initialValues: EmailFormValues = {
    email: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EmailFormSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Field label="Email" name="email" type="text" />
        </Form>
      )}
    </Formik>
  )
}

export default EmailForm
