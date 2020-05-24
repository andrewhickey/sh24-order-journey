import React from 'react'
import { Link } from 'react-router-dom'
import { ServiceForm } from '../../components'

function ServicePage() {
  return (
    <>
      <h1 className="text-xl mb-6">What service are you here for?</h1>
      <ServiceForm />
      <Link to="/email">Prev</Link>
      <Link to="summary">Next</Link>
    </>
  )
}

export default ServicePage
