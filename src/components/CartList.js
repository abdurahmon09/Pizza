import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Card from './Card'

export default function CartList({ products, addToCart}) {
    const [delay, setDelay] = useState(true)

    useEffect(() => {
        setDelay(true)
        setTimeout(() => {
            setDelay(false)
        }, 3000);
    }, [products])

    return (
        <>
            {
                delay ? 
                    <div className='loader'>
                        <img src='https://pandagif.com/gifs/ysjA8HY1lA.gif' alt='' className='loader'/>
                    </div>
                    :
                    <div className='cart-list'>
                        {
                            products.length === 0 ? <h2>Not Found</h2> :
                             products.map(product => {
                                 return (
                                    <Card key={product.id} data={product} addToCart={addToCart}/>
                                 )
                             })
                        }
                    </div>
            }
        </>
    )
}
