import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex-col flex mt-10 gap-2'>
        <Link className="text-center text-3xl font-bold" to='/signin' >Signin</Link>
        <Link className="text-center text-3xl font-bold" to='/signup' >Signup</Link>
    </div>
  )
}

export default Navbar