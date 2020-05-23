import React, { useCallback } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Field from '../Field'

export type NameFormValues = {
  name: string
}

const NameFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .max(25, 'Too long')
    .required('We need this info'),
})

function NameForm() {
  const handleSubmit = useCallback((values, actions) => {
    console.log('SUBMITTED', { values, actions })
  }, [])

  const initialValues: NameFormValues = {
    name: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={NameFormSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Field label="Name" type="text" />
        </Form>
      )}
    </Formik>
  )
}

export default NameForm
