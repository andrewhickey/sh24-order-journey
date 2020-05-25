import React, { useState, useMemo } from 'react'
import { Router } from '@reach/router'
import * as Yup from 'yup'
import { EmailPage, NamePage, ServicePage, SummaryPage } from './pages'
import { UserInput } from './types'
import { validateEmail, validateName, validateService } from './utils'

const UserInputSchema = Yup.object().shape({
  name: validateName,
  email: validateEmail,
  service: validateService,
})

function App() {
  // in a real app this would probably be replaced by some sort of store, redux/mobx etc
  const [userInput, setUserInput] = useState<UserInput>({
    name: '',
    email: '',
    service: '',
  })

  const isValid = useMemo(() => {
    return UserInputSchema.isValidSync(userInput)
  }, [userInput])

  return (
    <div className="flex justify-center items-center h-screen">
      <main role="main" className="flex-1 max-w-2xl mx-4 my-8">
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

          <SummaryPage path="summary" userInput={userInput} isValid={isValid} />
        </Router>
      </main>
    </div>
  )
}

export default App
