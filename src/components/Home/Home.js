import React, { Components } from 'react'
import { withAuth } from '../../Authorization'

export function Home(props) {
    
    return (
        <h1>{props.isLogged ? "Bienvenue" : "Veuillez vous logger"}</h1>
    )
}
export default withAuth(Home)