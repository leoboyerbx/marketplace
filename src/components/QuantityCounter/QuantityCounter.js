import {Button} from "antd";
import Text from "antd/es/typography/Text";
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
            <Button size="small" onClick={onMinus} disabled={bottomLocked}>-</Button><Text style={{ margin: '0 10px' }}>{ value}</Text><Button size="small" onClick={onPlus} disabled={topLocked}>+</Button>
        </>
    )
}

export default QuantityCounter
