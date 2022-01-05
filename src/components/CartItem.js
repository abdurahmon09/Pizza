import React from 'react'

export default function CartItem({ product, changeQuantity }) {
    return (
        <div className='cart-item'>
            <img src={product.url} alt='cart-item' className='cartItemImage'/>
            <div className='cartItem'>
                <div className='cartMain'>
                    <div>
                        <p className='itemTitle'>{product.title}</p>
                        <span className='itemPrice'>UZS: {product.price}</span>
                    </div>
                    <div>
                        <p className='itemQuantity'>Число: <span>{product.quantity}</span></p>
                        <div>
                            <button className='itemQuantityBtn' onClick={() => changeQuantity(product, '-')}>-</button>
                            <button className='itemQuantityBtn' onClick={() => changeQuantity(product, '+')}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
