import React from 'react';
import {withAuth} from "../Authentication";

export const CartContext = React.createContext(null);

const CartProvider = withAuth((props) => {
  const [cart, setCart] = React.useState([])

  const updateCart = (cart) => {
    if (props.auth.loggedUser) {
      console.log(props)
      props.auth.database.ref('userCarts/' + props.auth.loggedUser.uid).set({ cart })
    }
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
        updateCart([...cart, itemToInsert])
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
      let i = 0
      cart.map(item => { i += item.qty })
      return i
    },
    totalPrice: () => {
      let price = 0
      cart.map(item => { price += item.price * item.qty })
      return price
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
