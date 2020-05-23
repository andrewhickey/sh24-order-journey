import React from 'react'
import { Link } from 'react-router-dom'
import { NameForm } from '../../components'

function NamePage() {
  return (
    <>
      <h1 className="text-xl mb-6">What is your name?</h1>
      <NameForm />
      <Link to="email">Next</Link>
    </>
  )
}

export default NamePage
