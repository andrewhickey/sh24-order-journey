import React, { useCallback } from 'react'
import { Form, Formik } from 'formik'
import { SelectField } from '../../components'
import * as Yup from 'yup'
import { useNavigate } from '@reach/router'

export type ServiceFormValues = {
  service: string
}

const defaultValues: ServiceFormValues = { service: '' }

const ServiceFormSchema = Yup.object().shape({
  service: Yup.string().required('Choose one'),
})

type ServicePageProps = {
  path: string
  initialValues: ServiceFormValues
  onSubmit: (formValues: ServiceFormValues) => void
}

function ServicePage({ initialValues, onSubmit }: ServicePageProps) {
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (values, actions) => {
      actions.setSubmitting(true)
      await onSubmit(values)
      actions.setSubmitting(false)
      navigate('summary')
    },
    [onSubmit, navigate]
  )

  return (
    <>
      <h1 className="text-xl mb-6">What is your e-mail?</h1>
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={ServiceFormSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, setSubmitting, values }) => (
          <Form>
            <SelectField
              label="Service"
              name="service"
              options={[
                { label: 'STI Testing', value: 'STI Testing' },
                { label: 'Contraception', value: 'Contraception' },
                { label: 'Other', value: 'Other' },
              ]}
            />
            <div className="flex justify-between text-red-300  mt-6">
              <button
                type="button"
                onClick={async () => {
                  setSubmitting(true)
                  await onSubmit(values)
                  setSubmitting(false)
                  navigate('email')
                }}
              >
                Back
              </button>
              <button type="submit" disabled={!isValid}>
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ServicePage
