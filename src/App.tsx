import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { EmailPage, NamePage, ServicePage, SummaryPage } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NamePage />
        </Route>

        <Route exact path="/email">
          <EmailPage />
        </Route>

        <Route exact path="/service">
          <ServicePage />
        </Route>

        <Route exact path="/summary">
          <SummaryPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
