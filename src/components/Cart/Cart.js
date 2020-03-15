import React from 'react'
import {withCart} from "../../hocs/Cart";
import {Button, Empty, Popconfirm, Table, Typography} from 'antd'
import emptyCart from 'img/empty-cart.svg'
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import DeleteButton from "../DeleteButton/DeleteButton";

function Cart(props) {

    const cols = [
        {
            title: "Nom de l'article",
            dataIndex: 'name',
        },
        {
            title: "Prix Unitaire",
            dataIndex: 'price',
            render: price => <Typography>{price} €</Typography>
        },
        {
            title: "Quantité",
            dataIndex: 'qty',
            key: 'qty',
            render: (qty, item) => qty ? (
                    <QuantityCounter min={1} value={ item.qty } onPlus={() => {props.cart.increaseQty(item.id)}} onMinus={() => {props.cart.decreaseQty(item.id)}} />
            ) : ''
        },
        {
            // title: "Prix Unitaire",
            dataIndex: 'action',
            render: (show, item) => show === false ? (
                <Popconfirm
                title={"Vider le panier ?"}
                onConfirm={props.cart.empty}
                okText="Oui"
                cancelText="Annuler"
            >
                    <Button type="primary" danger size="large">
                        Vider le panier
                    </Button>
                </Popconfirm>
            ) : (<DeleteButton plural={item.qty > 1} onConfirm={() => { props.cart.remove(item.id) }} />)
        },
    ]
    const cartData = props.cart.length() ? [
        ...props.cart.get(),
        {
            key: 'total',
            id: 0,
            action: false,
            name: <Typography style={{ fontWeight: 'bold' }}>Total</Typography>,
            price: <Typography style={{ fontWeight: 'bold' }}>{props.cart.totalPrice()}</Typography>
        }
    ] :  props.cart.get()
    return (
        <div>
            <h1>Mon Panier</h1>

            <Table columns={cols} dataSource={ cartData } locale={{	emptyText: (<Empty image={emptyCart} description="Votre panier est vide." />) }} />
        </div>
    )
}

export default withCart(Cart)
