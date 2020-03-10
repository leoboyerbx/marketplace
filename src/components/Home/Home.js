import React, { Components } from 'react'
import { withFirebase } from '../Firebase'

export function Home(props) {
    
    return (
        <h1>{props.isLogged ? "Bienvenue" : "Veuillez vous logger"}</h1>
    )
}
export default withFirebase(Home)