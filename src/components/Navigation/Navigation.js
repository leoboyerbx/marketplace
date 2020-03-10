import * as ROUTES from '../../constants/Routes'
import React, { Components } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <ul>
                <li></li>
            </ul>
            <Link to={ ROUTES.LANDING }>Home</Link>
            <Link to={ ROUTES.SIGNIN }>Sign In</Link>
            <Link to={ ROUTES.SIGNUP }>Sign Up</Link>
        </div>
    )
}