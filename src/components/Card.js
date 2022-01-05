import React from 'react'
import iconCart from './cart.svg'

export default function Card({ data, addToCart}) {
    return (
        <div className='card'>
            <div className='card__header'>
                <img src={data.url} title={data.title} alt='productIMG'/>
            </div>
            <div className='card__body'>
                <h3 className='card__title'>{data.title}</h3>
                <p className='card__desc'>{data.desc}</p>
                <p className='card__price'><span>{data.price} Сум</span></p>
                <button className='btn card__add' onClick={() => addToCart(data)}>
                    <img src={iconCart} alt='' className='card__icon'/>
                    Buy
                </button>
            </div>
        </div>
    )
}
