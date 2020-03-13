import React from 'react';

export const CartContext = React.createContext(null);

const CartProvider = (props) => {
  const providedData = {
    cart: [],
    add: item => { providedData.cart.push(item) },
    length: () => providedData.cart.length
  }

  return (
    <CartContext.Provider value={ providedData }>
      {this.props.children}
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