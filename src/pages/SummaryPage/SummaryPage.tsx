import React from 'react'
import { Link } from '@reach/router'
import { UserInput } from '../../types'
import { Redirect } from '@reach/router'

type SummaryPageProps = {
  path: string
  userInput: UserInput
  isValid: boolean
}
function SummaryPage({ userInput, isValid }: SummaryPageProps) {
  if (isValid) {
    return (
      <>
        <h1 className="text-xl font-bold mb-6 space-y-4">Summary</h1>
        <div>
          <div className="flex justify-between">
            <span>
              Name: <span className="font-bold">{userInput.name} </span>
            </span>
            <Link to="/" className="text-red-300">
              edit
            </Link>
          </div>
          <div className="flex justify-between">
            <span>
              E-Mail: <span className="font-bold">{userInput.email} </span>
            </span>
            <Link to="/email" className="text-red-300">
              edit
            </Link>
          </div>
          <div className="flex justify-between">
            <span>
              Service: <span className="font-bold">{userInput.service}</span>
            </span>
            <Link to="/service" className="text-red-300">
              edit
            </Link>
          </div>
        </div>
        <div className="flex text-red-300 mt-6">
          <Link to="/service" className="self-start">
            {'<'} Prev
          </Link>
        </div>
      </>
    )
  }

  return <Redirect to="/" noThrow />
}

export default SummaryPage
