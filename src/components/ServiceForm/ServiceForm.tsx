import { Form, Formik } from 'formik'
import React, { useCallback } from 'react'
import * as Yup from 'yup'
import SelectField from '../SelectField'

export type ServiceFormValues = {
  service: string
}

const ServiceFormSchema = Yup.object().shape({
  service: Yup.string().required('Choose one'),
})

function ServiceForm() {
  const handleSubmit = useCallback((values, actions) => {
    console.log('SUBMITTED', { values, actions })
  }, [])

  const initialValues: ServiceFormValues = {
    service: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ServiceFormSchema}
      onSubmit={handleSubmit}
    >
      {() => (
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
        </Form>
      )}
    </Formik>
  )
}

export default ServiceForm
