import {Button, Popconfirm} from "antd";
import React from "react";
import { DeleteOutlined } from '@ant-design/icons'

const DeleteButton = props => {
    return (
        <Popconfirm
            title="Supprimer cet Article ?"
            onConfirm={props.onConfirm}
            onCancel={props.onCancel}
            okText="Oui"
            cancelText="Annuler"
        >
            <Button size="large" danger><DeleteOutlined /> Supprimer</Button>
        </Popconfirm>
    )
}

export default DeleteButton
