import {Button, Typography} from "antd";
import React from "react";

const QuantityCounter = props => {

    const value = props.value ? props.value : 0
    let bottomLocked = value <= props.min
    let topLocked = value >= props.max


    const onMinus = ev => {
        if (!bottomLocked) props.onMinus(ev)
    }
    const onPlus = ev => {
        if (!topLocked) props.onPlus(ev)
    }

    return (
        <>
            <Button data-testid="button-minus" size="small" onClick={onMinus} disabled={bottomLocked}>-</Button><Typography.Text data-testid="quantity-value" style={{ margin: '0 10px' }}>{ value}</Typography.Text><Button data-testid="button-plus" size="small" onClick={onPlus} disabled={topLocked}>+</Button>
        </>
    )
}

export default QuantityCounter
