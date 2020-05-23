import React from 'react'
import { Link } from 'react-router-dom'

function ServicePage() {
    return (
        <>
            <div>SERVICE PAGE</div>
            <Link to="/email">Prev</Link>
            <Link to="summary">Next</Link>
        </>
    )
}

export default ServicePage
