import React, { HTMLProps } from 'react'
import classNames from 'classnames'
import { Field as FormikField } from 'formik'

type FieldProps = {
  label: string
}

function Field({
  label,
  ...inputProps
}: FieldProps & HTMLProps<HTMLInputElement>) {
  return (
    <FormikField name="name">
      {({ field, meta }: any) => {
        const hasError = meta.touched && meta.error

        return (
          <div className="mb-6">
            <label className="block text-sm font-bold">
              {label}
              <input
                {...inputProps}
                {...field}
                className={classNames(
                  'shadow appearance-none border rounded w-full py-2 px-3 mt-2 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent',
                  { 'border-red-500': hasError }
                )}
              />
              {hasError && (
                <p className="text-red-500 text-xs italic">{meta.error}</p>
              )}
            </label>
          </div>
        )
      }}
    </FormikField>
  )
}

export default Field
