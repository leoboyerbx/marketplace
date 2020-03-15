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
            <Button size="small" onClick={onMinus} disabled={bottomLocked}>-</Button><Typography.Text style={{ margin: '0 10px' }}>{ value}</Typography.Text><Button size="small" onClick={onPlus} disabled={topLocked}>+</Button>
        </>
    )
}

export default QuantityCounter
