import { useNavigate } from '@reach/router'
import { Form, Formik } from 'formik'
import React, { useCallback } from 'react'
import * as Yup from 'yup'
import { Field } from '../../components'
import { validateName } from '../../utils'

export type NameFormValues = {
  name: string
}

const defaultValues: NameFormValues = { name: '' }

const NameFormSchema = Yup.object().shape({
  name: validateName,
})

type NamePageProps = {
  path: string
  initialValues: NameFormValues
  onSubmit: (formValues: NameFormValues) => void
}

function NamePage({ initialValues, onSubmit }: NamePageProps) {
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (values, actions) => {
      actions.setSubmitting(true)
      await onSubmit(values)
      actions.setSubmitting(false)
      navigate('email')
    },
    [onSubmit, navigate]
  )

  return (
    <>
      <h1 className="text-xl font-bold mb-6">What is your name?</h1>
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={NameFormSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Field label="Name" name="name" type="text" />
            <div className="flex justify-end text-red-300  mt-6">
              <button type="submit">Next {'>'}</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default NamePage
