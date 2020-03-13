import React from 'react';

export const CartContext = React.createContext(null);

const CartProvider = (props) => {

  return (
    <AuthContext.Provider value={ this.state }>
      {this.props.children}
    </AuthContext.Provider>
  )
}

export const withAuthProvider = Component => props => (
  <AuthProvider>
    <Component {...props}></Component>
  </AuthProvider>
)

export const withAuth = Component => props => (
<AuthContext.Consumer>
    {firebase => <Component {...props} auth={firebase} />}
  </AuthContext.Consumer>
);