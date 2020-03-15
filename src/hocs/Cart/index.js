import React from 'react';
import {withAuth} from "../Authentication";

export const CartContext = React.createContext(null);

const CartProvider = withAuth((props) => {
  const [cart, setCartState] = React.useState([])

  const setCart = cart => {
    setCartState(cart)
    saveCartToDatabase(cart)
  }

  const saveCartToDatabase = (cart) => {
    if (props.auth.loggedUser) {
      return props.auth.database.ref('users/' + props.auth.loggedUser.uid).set({ cart })
    }
  }

  const applyCartFromDatabase = () => {
    if (props.auth.loggedUser) {
      props.auth.database.ref('/users/' + props.auth.loggedUser.uid + '/cart').once('value').then(function(snapshot) {
        if (snapshot.val()) {
          setCart(snapshot.val())
        }
      });
    } else {return []}
  }

  const providedData = {
    get: () => cart,
    add: item => {
      // SI le même item est déjà dans le panier, on incrémente la quantité, sinon on crée une nouvelle entrée.
      const existingItem = cart.find(element => element.id === item.id)
      if (existingItem) {
        providedData.increaseQty(existingItem.id)
      } else {
        const itemToInsert = { ...item, qty: 1, key: item.id }
        setCart([...cart, itemToInsert])
      }
    },
    remove: id => {
      const newCart = cart.filter(item => item.id !== id)
      setCart(newCart)
    },
    increaseQty: id => {
      const item = cart.find(item => item.id === id)
      if (item) {
        const newCart = cart.map(item => {
          if (item.id === id) {
            item.qty++
          }
          return item
        })
        setCart(newCart)
      }
    },
    decreaseQty: id => {
      const item = cart.find(item => item.id === id)
      if (item && item.qty > 1) {
        const newCart = cart.map(item => {
          if (item.id === id) {
            item.qty--
          }
          return item
        })
        setCart(newCart)
      }
    },
    length: () => {
      if(cart) {
        let i = 0
        cart.map(item => { i += item.qty })
        return i
      } else {
        return 0
      }
    },
    totalPrice: () => {
      let price = 0
      cart.map(item => { price += item.price * item.qty })
      return price
    },
    retrieve: applyCartFromDatabase,
    empty: () => {
      setCart([])
    }
  }

  return (
    <CartContext.Provider value={ providedData }>
      {props.children}
    </CartContext.Provider>
  )
})

export const withCartProvider = Component => props => (
  <CartProvider>
    <Component {...props}></Component>
  </CartProvider>
)

export const withCart = Component => props => (
<CartContext.Consumer>
    {cart => <Component {...props} cart={cart} />}
  </CartContext.Consumer>
);
