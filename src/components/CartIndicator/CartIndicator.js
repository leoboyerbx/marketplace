import {Badge} from "antd";
import React, {useEffect} from "react";
import { ShoppingCartOutlined } from '@ant-design/icons'
import { withCart } from '../../hocs/Cart'

export class CartIndicator extends React.Component {
    componentDidMount() {
        this.props.cart.retrieve()
    }

    render () {
        return (
            <Badge count={ this.props.cart.length() }>
                Panier
                <ShoppingCartOutlined style={{ marginLeft: 5, marginRight: 8 }} />
            </Badge>
        )
    }

}

export default withCart(CartIndicator)
