import classNames from 'classnames'
import { useField } from 'formik'
import React from 'react'

type SelectFieldProps = {
  label: string
  name: string
  options: Array<{ label: string; value: any }>
}

function SelectField({ label, name, options }: SelectFieldProps) {
  const [, meta, helpers] = useField(name)

  const { value } = meta
  const { setValue } = helpers

  const isSelected = (v: any) => v === value
  const hasError = meta.touched && meta.error

  return (
    <div className="mb-6">
      <div className="text-sm font-bold">
        {label}
        <div className="flex space-x-4 mt-2">
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              className={classNames('py-3 px-5 font-bold', {
                'bg-white': isSelected(option.value),
                'bg-indigo-800': !isSelected(option.value),
                'text-indigo-900': isSelected(option.value),
              })}
              onClick={() => setValue(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-red-500 text-xs italic">
        {hasError && meta.error} &nbsp;
      </p>
    </div>
  )
}

export default SelectField
