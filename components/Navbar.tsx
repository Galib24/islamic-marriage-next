import { NAV_LINKS } from '@/public/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (
        <>
          


            <nav className='border-2 w-full   flex justify-between  border-red-500 base-100   relative z-30 p-3'>
                <Link href={'/'}>
                    <Image src="/image 2.png" alt='logo' width={74} height={29} className='lg:ml-40'>
                    </Image>
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
            </nav>
        </>
    )
}

export default Navbar