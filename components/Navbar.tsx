import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='border-2 border-red-500 base-100 max-container  relative z-30 py-5'>
            <Link href={'/'}>
<Image src="/image 2.png" alt='logo' width={74} height={29}>

</Image>
            </Link>
        </nav>
    )
}

export default Navbar