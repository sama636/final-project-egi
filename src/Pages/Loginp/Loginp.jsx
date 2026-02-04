import React from 'react'
import { Link } from 'react-router-dom'
import { IoPerson  } from "react-icons/ci";

export default function Loginp() {  
  return (
    <div className='log'>
        <Link to={"/login"}><IoPerson /></Link>    
    </div>
  )
}