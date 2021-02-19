import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <main>
            Hello<br />
            <Link to="users">See users</Link>
        </main>
    )
}