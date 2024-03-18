'use client'
import { NAV_LINKS } from '@/public/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuBellRing } from "react-icons/lu";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";


const Navbar = () => {
   
    

    


   
    return (
        <>



            <nav className='border-1 w-full   flex justify-between  base-100   relative z-30 p-1 py-2'>
                <Link href={'/'}>
                    <Image
                        src="/image 2.png"
                        alt='logo'
                        width={74}
                        height={29}
                        className='hidden lg:block lg:ml-40'
                    />
                </Link>
                <div className='flex justify-items-center mr-40'>
                    <ul className='hidden mr-5 h-full gap-12 lg:flex mt-5 '>
                        {NAV_LINKS.map((link) => (
                            <Link style={{ color: '#0B0B0B' }} href={link.href} key={link.key}
                            
                                className=' font-gumela cursor-pointer pb-1.5 text-sm '>
                                {link.label}
                            </Link>
                        ))}
                    </ul>

                    <div className='lg:flex justify-center font-gumela hidden'>
                        <button style={{ borderRadius: '8px', border: '1px solid #2D1843', gap: '10px' }} className='m-3 px-3 border flex text-[#6D194F] text-sm justify-center  items-center'>
                            <Image src="/user.png" alt='user' width={12} height={12} className='lg:inline hidden md:inline'></Image>
                            Profile
                        </button>
                    </div>


                </div>








            </nav>
           
        </>
    )
}

export default Navbar