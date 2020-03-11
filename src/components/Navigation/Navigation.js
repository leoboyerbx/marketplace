import * as ROUTES from '../../constants/Routes'
import React, { Components } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { withAuth } from '../Authentication'

export function Navigation(props) {
    if (props.auth.loggedUser) {
        return (
            <Menu mode="horizontal" theme="dark"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}>
                <Menu.Item>
                    <Link to={ ROUTES.LANDING }>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ ROUTES.SIGN_IN }>Sign out {props.auth.loggedUser.user.email}</Link>
                </Menu.Item>
            </Menu>
        )
    } else {
        return (
            <Menu mode="horizontal" theme="dark"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}>
                <Menu.Item>
                    <Link to={ ROUTES.LANDING }>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ ROUTES.SIGN_IN }>Sign In</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={ ROUTES.SIGN_UP }>Sign Up</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withAuth(Navigation)