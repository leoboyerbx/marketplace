import React from 'react'
import { List, Card, Popconfirm } from 'antd'
import ProductItem from '../ProductItem/ProductItem'
import Meta from 'antd/lib/card/Meta'

export default function ProductList (props) {

    return (
        <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={props.articlesData}
        renderItem={item => (
            <ProductItem item={item}></ProductItem>
        )}
        />
    )
}
