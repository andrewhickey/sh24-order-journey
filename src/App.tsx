import React, { useState } from 'react'
import { Router } from '@reach/router'
import { EmailPage, NamePage, ServicePage, SummaryPage } from './pages'
import { UserInput } from './types'

function App() {
  // in a real app this would probably be replaced by some sort of store, redux/mobx etc
  const [userInput, setUserInput] = useState<UserInput>({
    name: '',
    email: '',
    service: '',
  })

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-1 max-w-2xl mx-4 my-8 text-center md:text-left">
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

          <SummaryPage path="/summary" userInput={userInput} />
        </Router>
      </div>
    </div>
  )
}

export default App
