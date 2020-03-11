import React from 'react';
import Firebase from '../Firebase'

export const AuthContext = React.createContext(null);

class AuthProvider extends React.Component {

  constructor (props) {
    super(props)
    this.firebase = new Firebase()

    this.firebase.auth.onAuthStateChanged(user => {
        if (user) {
            this.setState({loggedUser: user})
        } else {
            this.setState({loggedUser: undefined})
        }
      })
  }

  state = {
    firebase: this.firebase,
    loggedUser: undefined,
    signIn: (email, password) => {
      this.firebase.doSignInWithEmailAndPassword(email, password).then(user => {
        console.log(user)
        this.setState({ loggedUser: user })
      })
    },
    signUp: (email, password) => {
      this.firebase.doCreateUserWithEmailAndPassword(email, password).then(user => {
        console.log(user)
      })
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