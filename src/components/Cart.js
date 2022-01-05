import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'

export default function Cart({ products, changeQuantity}) {
    const [classActive, toggleActive] = useState(false)
    const [sum, setSum] = useState(0)

    const toggleBtn = () => {
        toggleActive(!classActive)
    }

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total += products[i].price * products[i].quantity
        }
        setSum(total)
    }, [products])

    const checkout = () => {
        alert(`Subtotial: $ ${sum.toFixed(2)}`)
    }

    return (
        <>
            <button className='toggle-btn' onClick={toggleBtn}>
                Cart
            </button>
            <div className={classActive ? 'shoppingCart active' : 'shoppingCart'}>
                <div className='shopping-cart'>
                    <div className='cartContent'>
                        <div className='cartList'>
                            {
                                products.length === 0 ?
                                <div className='emptyCart'>
                                    <img src='https://shop.myfelt-europe.com/skin/frontend/rwd/myfelt-2018/images/cart-noitem-mobile.gif' alt={products.title}/>
                                </div>
                                :
                                products.map(product => {
                                    return (
                                        <>
                                            <CartItem key={product.id} changeQuantity={changeQuantity} product={product}/>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className='total'>
                            <div className='info'>
                                <p className='totalText'>Total</p>
                                <p className='totalPrice'>UZS: {sum.toFixed(2)}</p>
                            </div>
                            <button className='PurchaseBtn' onClick={checkout}>
                                Purchase
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
