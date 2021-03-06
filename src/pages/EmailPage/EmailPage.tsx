import { useNavigate } from '@reach/router'
import { Form, Formik } from 'formik'
import React, { useCallback } from 'react'
import * as Yup from 'yup'
import { Field } from '../../components'
import { validateEmail } from '../../utils'

export type EmailFormValues = {
  email: string
}

const defaultValues: EmailFormValues = { email: '' }

const EmailFormSchema = Yup.object().shape({
  email: validateEmail,
})

type EmailPageProps = {
  path: string
  initialValues: EmailFormValues
  onSubmit: (formValues: EmailFormValues) => void
}

function EmailPage({ initialValues, onSubmit }: EmailPageProps) {
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (values, actions) => {
      actions.setSubmitting(true)
      await onSubmit(values)
      actions.setSubmitting(false)
      navigate('service')
    },
    [onSubmit, navigate]
  )

  return (
    <>
      <h1 className="text-xl font-bold mb-6">What is your e-mail?</h1>
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={EmailFormSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setSubmitting }) => (
          <Form>
            <Field label="Email" name="email" type="text" />
            <div className="flex justify-between text-red-300  mt-6">
              <button
                type="button"
                onClick={async () => {
                  setSubmitting(true)
                  await onSubmit(values)
                  setSubmitting(false)
                  navigate('/')
                }}
              >
                {'<'} Back
              </button>
              <button type="submit">Next {'>'}</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default EmailPage
