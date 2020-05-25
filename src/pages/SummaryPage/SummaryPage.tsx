import React from 'react'
import { Link } from '@reach/router'
import { UserInput } from '../../types'

type SummaryPageProps = {
  path: string
  userInput: UserInput
}
function SummaryPage({ userInput }: SummaryPageProps) {
  return (
    <>
      <h1 className="text-xl mb-6">Summary</h1>
      <div>
        <div>
          Name: {userInput.name}{' '}
          <Link to="/" className="text-red-300">
            edit
          </Link>
        </div>
        <div>
          E-Mail: {userInput.email}{' '}
          <Link to="/email" className="text-red-300">
            edit
          </Link>
        </div>
        <div>
          Service: {userInput.service}{' '}
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

export default SummaryPage
