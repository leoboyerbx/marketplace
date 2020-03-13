import React from 'react'
import {withCart} from "../../hocs/Cart";
import {Button, Empty, InputNumber, Table} from 'antd'
import Text from "antd/es/typography/Text";

function Cart(props) {
    const cols = [
        {
            title: "Nom de l'article",
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: "Prix Unitaire",
            dataIndex: 'price',
            key: 'price',
            render: price => <Text>{price} €</Text>
        },
        {
            title: "Quantité",
            dataIndex: 'qty',
            key: 'qty',
            render: qty => qty ? (
                    <>
                    <Button size="small">-</Button><Text style={{ margin: '0 10px' }}>{ qty }</Text><Button size="small">+</Button>
                    </>
            ) : ''
        },
    ]
    const cartData = props.cart.length() ? [
        ...props.cart.get(),
        {
            name: <Text style={{ fontWeight: 'bold' }}>Total</Text>,
            price: <Text style={{ fontWeight: 'bold' }}>{props.cart.totalPrice()}</Text>
        }
    ] :  props.cart.get()
    return (
        <div>
            <h1>Mon Panier</h1>
            <Table columns={cols} dataSource={ cartData } locale={{	emptyText: (<Empty image="../../img/empty-cart.svg" description="Votre panier est vide." />) }} />
        </div>
    )
}

export default withCart(Cart)
