import React, { Components } from 'react'
import { withAuth } from '../Authentication'
import * as ROUTES from '../../constants/Routes'
import { Link } from 'react-router-dom'
import ProductList from '../ProductsList/ProductList'
import products from '../../fakeData/products'

export function Home(props) {
      
    
    return (
        <>
            {props.auth.loggedUser ? (
           <div>
                <h1>Bienvenue {props.auth.loggedUser.displayName} ! </h1>
                <p>Vous pouvez désormais faire vos achats.</p>
                <ProductList articlesData={products}></ProductList>
            </div>
        ) : (
            <div>
                <h1>Bienvenue</h1>
                Pour commencer à effectuer vos achats, veuillez vous logger.
            </div>
        )}
        </>
    )
}
export default withAuth(Home)