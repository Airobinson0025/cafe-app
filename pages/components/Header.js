import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [ dropMenu, setDroMenu ] = useState(false);

    const handleClick = () => {
        
        setDroMenu(!dropMenu)
    }


  return (
    <div className='flex justify-between items-center p-6'>
        <div>
            <Link href='/' className='font-satisfy font-bold text-4xl'>React Cafe</Link>
        </div>

        <nav className='text-xl'>
           <ul className='hidden sm:flex space-x-6'>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/menu'>Menu</Link>
            </li>
            <li>
                <Link href='/shop'>Shop</Link>
            </li>
            <li>
                <Link href='/gallery'>Gallery</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
           </ul>
        </nav>

        {/*mobile button */}
        <div className='sm:hidden pl-24'>
            <button onClick={handleClick}>
                {dropMenu ? null : <AiOutlineMenu size={25}/> }
            </button>
        </div>

        {/* mobile menu */}
        <div>
           
        <nav className={dropMenu ? 'flex text-3xl text-center text-white sm:hidden absolute top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-full bg-stone-600 ease-in duration-300' : 'flex text-3xl text-center text-white sm:hidden absolute top-0 left-[-1000px] right-0 bottom-0 justify-center items-center w-full h-full bg-stone-600 ease-in duration-300'}>
        <button className='absolute top-8 right-12' onClick={handleClick}>
                {dropMenu ? <AiOutlineClose size={25}/> : null }
        </button>
        <ul className='space-y-6'>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/menu'>Menu</Link>
            </li>
            <li>
                <Link href='/shop'>Shop</Link>
            </li>
            <li>
                <Link href='/gallery'>Gallery</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
        </nav>
        </div>

    </div>
  )
}

export default Header