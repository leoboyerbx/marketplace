import {Button, Popconfirm} from "antd";
import React from "react";
import { DeleteOutlined } from '@ant-design/icons'

const DeleteButton = props => {
    return (
        <Popconfirm
            title={props.plural ? "Supprimer ces articles ?" : "Supprimer cet article ?"}
            onConfirm={props.onConfirm}
            onCancel={props.onCancel}
            okText="Oui"
            cancelText="Annuler"
            data-testid={"popconfirm"}
        >
            <Button data-testid='deletebutton' size="large" danger><DeleteOutlined /> Supprimer</Button>
        </Popconfirm>
    )
}

export default DeleteButton
