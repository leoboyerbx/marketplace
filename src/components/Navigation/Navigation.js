import * as ROUTES from '../../constants/Routes'
import React, { Components } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import { withAuth } from '../Authentication'

export function Navigation(props) {

    console.log(props.location.pathname)

    if (props.auth.loggedUser) {
        return (
            <Menu mode="horizontal" theme="dark"
            defaultSelectedKeys={[ props.location.pathname ]}
            style={{ lineHeight: '64px' }}>
                <Menu.Item key={ ROUTES.LANDING }>
                    <Link to={ ROUTES.LANDING }>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ ROUTES.SIGN_IN } onClick={props.auth.signOut}>Sign out {props.auth.loggedUser.displayName ? props.auth.loggedUser.displayName : props.auth.loggedUser.email }</Link>
                </Menu.Item>
            </Menu>
        )
    } else {
        return (
            <Menu mode="horizontal" theme="dark"
            defaultSelectedKeys={[ props.location.pathname ]}
            style={{ lineHeight: '64px' }}>
                <Menu.Item key={ ROUTES.LANDING }>
                    <Link to={ ROUTES.LANDING }>Home</Link>
                </Menu.Item>
                <Menu.Item key={ ROUTES.SIGN_IN }>
                    <Link to={ ROUTES.SIGN_IN }>Sign In</Link>
                </Menu.Item>
                <Menu.Item key={ ROUTES.SIGN_UP }>
                    <Link to={ ROUTES.SIGN_UP }>Sign Up</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withAuth(withRouter(Navigation))