import React from 'react'
import { Link } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";

export default function Loginp() {  
  return (
    <div className='log'>
        <Link to={"/login"}><CiLogin/></Link>    
    </div>
  )
}