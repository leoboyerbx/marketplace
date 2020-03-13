import React from 'react';

export const CartContext = React.createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = React.useState([])

  const providedData = {
    get: () => cart,
    add: item => {
      // SI le même item est déjà dans le panier, on incrémente la quantité, sinon on crée une nouvelle entrée.
      const existingItem = cart.find(element => element.id === item.id)
      if (existingItem) {
        const id = existingItem.id
        const newCart = cart.map(item => {
          if (item.id === id) {
            item.qty++
          }
          return item
        })
        setCart(newCart)
      } else {
        const itemToInsert = { ...item, qty: 1 }
        setCart([...cart, itemToInsert])
      }
    },
    length: () => {
      let i = 0
      cart.map(item => { i += item.qty })
      return i
    }
  }

  return (
    <CartContext.Provider value={ providedData }>
      {props.children}
    </CartContext.Provider>
  )
}

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