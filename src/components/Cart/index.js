import React from 'react';

export const CartContext = React.createContext(null);

class AuthProvider extends React.Component {

  constructor (props) {
    super(props)
    this.firebase = new Firebase(user => {
      this.setState({ loggedUser: user })
    })

    this.state = {
      firebase: this.firebase,
      loggedUser: undefined,
      signIn: this.firebase.doSignInWithEmailAndPassword,
      signOut: this.firebase.doSignOut,
      signUp: this.firebase.doCreateUserWithEmailAndPassword
    }

  }
  
  render () {
    console.log('hey')
    return (
      <AuthContext.Provider value={ this.state }>
        {this.props.children}
      </AuthContext.Provider>
    )

  }
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