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



            <nav className='border-1 w-full   flex justify-between  base-100   relative z-30 p-5'>
                <Link href={'/'}>
                    <Image
                        src="/image 2.png"
                        alt='logo'
                        width={74}
                        height={29}
                        className='hidden lg:block lg:ml-40'
                    />
                </Link>
                <div className='flex justify-items-center mr-36'>
                    <ul className='hidden mr-5 h-full gap-12 lg:flex mt-5 '>
                        {NAV_LINKS.map((link) => (
                            <Link style={{ color: '#0B0B0B' }} href={link.href} key={link.key}
                                className='text-sm font-gumela cursor-pointer pb-1.5 '>
                                {link.label}
                            </Link>
                        ))}
                    </ul>

                    <div className='lg:flex justify-center font-gumela hidden'>
                        <button style={{ borderRadius: '8px', border: '1px solid #2D1843', gap: '10px' }} className='m-3 px-3 border flex text-[#6D194F] justify-center text-sm items-center'>
                            <Image src="/user.png" alt='user' width={10} height={10} className='lg:inline hidden md:inline'></Image>
                            Profile
                        </button>
                    </div>


                </div>




                {/* for small device  */}




                <div className='lg: hidden, md:hidden '>
                    <div className='absolute top-5 left-0 flex justify-center'>
                        <FaRegArrowAltCircleLeft className='text-2xl'></FaRegArrowAltCircleLeft>

                        <h2 className='font-bold ml-2 font-gumela'>My Plan</h2>
                    </div>

                </div>

                <div className='lg:hidden md:hidden'>
                    <div className='flex gap-3'>
                        <LuBellRing className='text-2xl mt-1'></LuBellRing>
                        <Image src="/Image (1).png" alt='logo' width={30} height={30}>
                        </Image>
                    </div>

                </div>
                <div className='lg:hidden md:hidden absolute bottom-0'>
                    <h2 className='font-bold text-xs font-gumela'>Free Plan</h2>
                </div>
                <div className='lg:hidden md:hidden absolute top-10'>
                    <div className="w-80 border-1 font-bold border-t border-[#3A1F56] my-10"></div>
                </div>

                {/* second part */}

                <div style={{ border: '1px solid black' }} className='bg-white rounded-md shadow-lg w-72 h-80 absolute top-28 lg:hidden md:hidden left-10 my-1'>
                    <div className='flex justify-between px-6 mt-4'>
                        <h2 className='text-xs'>Unlimited Plum Tree</h2>
                        <RxCrossCircled className='text-red-500 '></RxCrossCircled>
                    </div>
                    <div className="w-72 border-1  border-t border-[#3A1F56] my-1">
                        <div className='flex justify-between px-6 mt-4'>
                            <h2 className='text-xs'>Unlimited Plum Tree</h2>
                            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
                        </div>
                    </div>
                    <div className="w-72 border-1  border-t border-[#3A1F56] my-1">
                        <div className='flex justify-between px-6 mt-4'>
                            <h2 className='text-xs'>Unlimited Plum Tree</h2>
                            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
                        </div>
                    </div>
                    <div className="w-72 border-1  border-t border-[#3A1F56] my-1">
                        <div className='flex justify-between px-6 mt-4'>
                            <h2 className='text-xs'>Unlimited Plum Tree</h2>
                            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
                        </div>
                    </div>
                    <div className="w-72 border-1  border-t border-[#3A1F56] my-1">
                        <div className='flex justify-between px-6 mt-4'>
                            <h2 className='text-xs'>Unlimited Plum Tree</h2>
                            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
                        </div>
                    </div>
                    <div className="w-72 border-1  border-t border-[#3A1F56] my-1">
                        <div className='flex justify-between px-6 mt-4'>
                            <h2 className='text-xs'>Unlimited Plum Tree</h2>
                            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
                        </div>
                    </div>
                    <div className="w-72 border-1  border-t border-[#3A1F56] my-1">
                        <div className='flex justify-between px-6 mt-4'>
                            <h2 className='text-xs'>Unlimited Plum Tree</h2>
                            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
                        </div>
                    </div>
                    <div className="w-72 border-1  border-t border-[#3A1F56] my-1">
                        <div className='flex justify-between px-6 mt-4'>
                            <h2 className='text-xs'>Unlimited Plum Tree</h2>
                            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
                        </div>
                    </div>
                </div>





            </nav>
            {/* third part */}

            <div className=' justify-center font-gumela lg:hidden md:hidden'>
                <button  style={{ borderRadius: '8px', border: '1px solid #2D1843', gap: '10px' }} className='m-3 px-24 py-4 border flex bg-gradient-to-tr from-[#410F2F] to-[#8C2065] justify-center font-bold text-white text-sm items-center absolute bottom-0 left-8 '>


                    Upgrade Plan
                </button>
            </div>
        </>
    )
}

export default Navbar