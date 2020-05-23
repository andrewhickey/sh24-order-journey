import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div>NAME PAGE</div>
                    <Link to="email">Next</Link>
                </Route>

                <Route exact path="/email">
                    <div>EMAIL PAGE</div>
                    <Link to="/">Prev</Link>
                    <Link to="service">Next</Link>
                </Route>

                <Route exact path="/service">
                    <div>SERVICE PAGE</div>
                    <Link to="/email">Prev</Link>
                    <Link to="summary">Next</Link>
                </Route>

                <Route exact path="/summary">
                    <div>SERVICE PAGE</div>
                    <Link to="/service">Prev</Link>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
