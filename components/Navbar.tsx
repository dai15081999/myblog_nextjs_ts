import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex item-center justify-between py-6'>
        <Link href="/">
            <div className='flex items-center cursor-pointer'>
                <Image alt={''} src="/logo.png" width={35} height={35}/>
                <span className='font-bolg ml-2 text-primary'>Coder's Blog</span>
            </div>
        </Link>
        
        <ul className='flex items-center'>
            <li className='mr-6 font-medium text-gray-600'><a href="#">Products</a></li>
            <li className='mr-6 font-medium text-gray-600'><a href="#">Pricing</a></li> 
            <li className='mr-6 font-medium text-gray-600'><a href="#">Docs</a></li> 
            <li className='mr-6 font-medium text-gray-600'><a href="#">Company</a></li>     
        </ul>

        <ul className='flex items-center'>
            <li className='mr-6 font-medium text-gray-600'>
                <a className='hover:text-gray-600' href="#">Login</a>
            </li>
            <li className='mr-6 font-medium text-gray-600'>
                <a className='transition-all hover:bg-primary-dark bg-primary py-2 px-4 rounded text-white' href="#">Signup</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar