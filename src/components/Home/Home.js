import React, { Components } from 'react'
import { AuthContext } from '../../App'

export default function Home(props) {
    
    return (
        <AuthContext.Consumer>
            <h1>{true ? 'Hello mec !' : 'Veuillez vouq connezter'}</h1>
        </AuthContext.Consumer>
    )
}