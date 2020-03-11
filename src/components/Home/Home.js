import React, { Components } from 'react'
import { withAuth } from '../Authentication'

export function Home(props) {
    
    return (
        <h1>{props.auth.loggedUser ? props.auth.loggedUser.displayName ? "Bienvenue " + props.auth.loggedUser.displayName : '' : "Veuillez vous logger"}</h1>
    )
}
export default withAuth(Home)