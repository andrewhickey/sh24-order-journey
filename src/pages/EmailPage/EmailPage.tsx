import React from 'react'
import { Link } from 'react-router-dom'
import { EmailForm } from '../../components'

function EmailPage() {
  return (
    <>
      <h1 className="text-xl mb-6">What is your e-mail?</h1>
      <EmailForm />
      <Link to="/">Prev</Link>
      <Link to="service">Next</Link>
    </>
  )
}

export default EmailPage
