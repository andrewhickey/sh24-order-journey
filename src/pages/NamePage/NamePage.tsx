import React from 'react'
import { Link } from 'react-router-dom'
import { NameForm } from '../../components'

function NamePage() {
  return (
    <>
      <NameForm />
      <Link to="email">Next</Link>
    </>
  )
}

export default NamePage
