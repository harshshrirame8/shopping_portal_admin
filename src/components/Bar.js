import React, { useState } from 'react'
import './Bar.css'
import logo from "../images/logo.png"
import name from "../images/name.png"
import {AiTwotoneHome} from 'react-icons/ai'



function Bar() {

  const rel = () =>{
      window.location.reload()
  }
  return (
    <div className='Bar'>
        <img className = "logo" src = {logo}></img>
        <img className = "ne" src = {name}></img>
        <i onClick={rel}><AiTwotoneHome/></i>
    </div>
  )
}

export default Bar