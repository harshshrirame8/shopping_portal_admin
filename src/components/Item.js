import React, { useState } from 'react'
import './Item.css'


function Item(props) {
    const item = props.item

  return (
    <div className='item'>
        <img className ='image' src = {item.link}></img>
        <p className='name'>{item.name}</p>
        <p className='price'>₹{item.price}</p>
    </div>
  )
}

export default Item