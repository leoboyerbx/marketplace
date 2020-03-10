import * as ROUTES from '../../constants/Routes'
import React, { Components } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { withFirebase } from '../Firebase'

export function Navigation(props) {
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
            <Menu.Item>
                { props.firebase.loggedUser ? 'Non connecté' : 'Non Connecté' }
            </Menu.Item>
        </Menu>
        // <div>
        //     <ul>
        //         <li></li>
        //         <li><Link to={ ROUTES.SIGNIN }>Sign In</Link></li>
        //         <li><Link to={ ROUTES.SIGNUP }>Sign Up</Link></li>
        //     </ul>
        // </div>
    )
}

export default withFirebase(Navigation)