import React, { useEffect, useState } from 'react'
import { useQuery } from 'jsonapi-react'
import { Link } from 'react-router-dom'

export default function IndexUser() {
    const [users, setUsers] = useState([])
    const { data, error, isLoading } = useQuery('users')

    useEffect(
        () => {
            if (!!error)
                console.error(error)
        },
        [error]
    )

    useEffect(
        () => {
            if (!!data)
                setUsers(/** @type {any[]} */(data))
        },
        [data]
    )

    return (
        <div>
            <b>User listing:</b>
            {isLoading
                ? <p>Loading...</p> :
                users?.length > 0 ?
                    <ul>
                        {users.map((user, i) => (
                            <li
                                key={`user_${i}`}>
                                <Link
                                    to={`/user/${user.id}`}
                                >
                                    {user?.['first-name']} {user?.['last-name']}
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                    :
                    <p>No result<br /></p>
            }
            <Link
                to="user/new"
            >
                Create a new
            </Link>
        </div>
    )
}