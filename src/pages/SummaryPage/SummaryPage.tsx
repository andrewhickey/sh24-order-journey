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
        <div>Name: {userInput.name}</div>
        <div>E-Mail: {userInput.email}</div>
        <div>Service: {userInput.service}</div>
      </div>
      <Link to="/service">Prev</Link>
    </>
  )
}

export default SummaryPage
