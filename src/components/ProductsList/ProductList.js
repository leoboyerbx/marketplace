import React, { Components } from 'react'
import { Card, List, Popconfirm } from 'antd'
import Meta from 'antd/lib/card/Meta'

export default function ProductList (props) {

function addToCart (item) {
    console.log(item)
}

    return (
        <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={props.articlesData}
        renderItem={item => (
        <List.Item>
            <Popconfirm
        title={item.name }
        onConfirm={() => { addToCart(item) }}
        okText="Ajouter au panier"
        cancelText="Cancel"
        placement="bottom"
        >
                <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={item.imgUrl} />}
            >
                <Meta title={ item.name } description={ item.price + ' €' } />
            </Card>
            </Popconfirm>
        </List.Item>
        )}
        />
    )
}
