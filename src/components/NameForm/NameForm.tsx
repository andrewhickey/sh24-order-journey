import React, { useCallback } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

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
          <Field
            name="name"
            render={({ field, meta }: any) => (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold">
                  Password
                  <input
                    type="text"
                    {...field}
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mt-2 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {meta.touched && meta.error && (
                    <p className="text-red-500 text-xs italic">{meta.error}</p>
                  )}
                </label>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  )
}

export default NameForm
