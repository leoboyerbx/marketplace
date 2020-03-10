import React from 'react'

export const AuthContext = React.createContext(null)
export const withAuth = (MyComponent) => {
    return () => {
        return (
          <AuthContext.Consumer>
                  { value => <MyComponent {...value}></MyComponent> }
          </AuthContext.Consumer>
        )
    }
}