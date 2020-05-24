import React, { useState } from 'react'
import { Router } from '@reach/router'
import { EmailPage, NamePage, ServicePage, SummaryPage } from './pages'

function App() {
  // in a real app this would probably be replaced by some sort of store, redux/mobx etc
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    service: '',
  })

  return (
    <Router>
      <NamePage
        path="/"
        initialValues={{ name: userInput.name }}
        onSubmit={({ name }) => setUserInput({ ...userInput, name })}
      />

      <EmailPage
        path="email"
        initialValues={{ email: userInput.email }}
        onSubmit={({ email }) => setUserInput({ ...userInput, email })}
      />

      <ServicePage
        path="service"
        initialValues={{ service: userInput.service }}
        onSubmit={({ service }) => setUserInput({ ...userInput, service })}
      />

      <SummaryPage path="/summary" />
    </Router>
  )
}

export default App
