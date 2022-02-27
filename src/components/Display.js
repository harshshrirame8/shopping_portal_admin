import React, { useState } from 'react'
import './Display.css'
import {AiFillBook,AiOutlineLink} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import Bar from './Bar'

var track;

function Display(props) {
    var item = props.item
    var items = [...props.items]
    const update = (a) =>{
        var md = document.getElementById("md");
        md.style.display = "block"
        console.log(a)
        track = a;
        console.log("Track : " , track)
    }

    window.onclick = function(event){
        var md = document.getElementById("md");
        if(event.target == md){
            md.style.display = "none"
        }
    }

    const uppro = (a) =>{
        const na = document.getElementById('na').value
        const pr = document.getElementById('pr').value 
        const li = document.getElementById('li').value
        
        
        for(let i=0; i<items.length; i++){
            
            if(items[i].id === a){
                if(na !== ''){
                    items[i].name = na;
                }
                if(pr !== ''){
                    items[i].price = pr;
                }
                if(li !== ''){
                    items[i].link = li;
                }
            }
        }
        props.setitems(items)
    }

  return (
    <div className = 'main'>
        <Bar/>
        <div className='all'>
            <div className='title'>Book Details</div>
            <div className = 'line'></div>
            <img className = "item-image" src = {item.link}></img>
            <div className = "item-name" >{item.name}</div><p></p>
            <div className = "item-desc" >{item.desc}</div><p></p>
            <div className = "item-price">₹{item.price}</div>
        </div>
    
    <div>
            <button onClick = {() => update(item.id)} className='update'>Update</button>
    </div>
    <div id = "md" className = "md">
            <div className="mc">
                <div className='font'>
                    <p>Update Book... </p>
                </div>
                <p>Product Name</p>
                <i className='b'><AiFillBook/></i>
                <input placeholder = "Book Name" id = "na" type = "text"></input>
                <p>Product Price</p>
                <i className='r'><FaRupeeSign/></i>
                <input placeholder = "Book Cost" id = "pr" type = "text"></input>
                <p>Product Image Link</p>
                <i className='l'><AiOutlineLink/></i>
                <input placeholder = "Book Link" id = "li" type = "text"></input>
                <div className = "dot"></div>
                <button id = {item.id} className='butto' onClick={() => uppro(track)}>Update Product</button>
            </div>
        </div>
        
        
    </div>
  )
}

export default Display