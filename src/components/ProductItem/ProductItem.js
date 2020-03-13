import React from 'react'
import { Card, List, Popconfirm } from 'antd'
import Meta from 'antd/lib/card/Meta'

export default function ProductItem (props) {

    const item = props.item

    function addToCart () {

    }

    return (
        <List.Item style={{backgroundColor: '#ff0'}}>
            <Popconfirm
        title={item.name }
        onConfirm={ addToCart}
        okText="Ajouter au panier"
        cancelText="Cancel"
        placement="bottom"
        >
                <Card
            hoverable
            
            cover={<img alt="example" src={item.imgUrl} />}
            >
                <Meta title={ item.name } description={ item.price + ' €' } />
            </Card>
            </Popconfirm>
        </List.Item>
    )
}