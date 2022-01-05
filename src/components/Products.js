import React from 'react'
import CartList from './CartList'

export default function Products({ products, addToCart}) {
    return (
        <div className='products'>
            <h3 className='themeText'>Pizza</h3>
            <CartList products={products} addToCart={addToCart}/>
        </div>
    )
}
