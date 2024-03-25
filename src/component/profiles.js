import React from 'react'
import img from "./assets/Learnable logo 3.svg";

export default function Profiles() {
  return (
    <div className='profile'>
        {Item}
    </div>
  )
}

function Item (){
    return(
        <div className='flex'>
            <div className='item'>
                <img src={img} alt=""/>

                <div className='info'>
                    <h3 className='name text-dark'>Name</h3>
                </div>
                <div className='item'>
                    <span>score</span>
                </div>
            </div>
        </div>
    )
}
