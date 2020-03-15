let cart = []
const setCart = newCart => { cart = newCart }

export const cartData = {
    get: () => cart,
    add: item => {
        // SI le même item est déjà dans le panier, on incrémente la quantité, sinon on crée une nouvelle entrée.
        const existingItem = cart.find(element => element.id === item.id)
        if (existingItem) {
            cartData.increaseQty(existingItem.id)
        } else {
            const itemToInsert = {...item, qty: 1, key: item.id}
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
        if (cart) {
            let i = 0
            cart.map(item => {
                i += item.qty
            })
            return i
        } else {
            return 0
        }
    },
    totalPrice: () => {
        let price = 0
        cart.map(item => {
            price += item.price * item.qty
        })
        return price
    },
    retrieve: () => null,
    empty: () => {
        setCart([])
    }
}

export const authNotLogged = {
    loggedUser: undefined
}
