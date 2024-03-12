import Image from 'next/image'
import React from 'react'


const ThirdSection = () => {
  return (
    <>
      <div className='hidden lg:block'>
        <div className='w-full flex justify-center mt-7'>
          <div className='flex gap-5'>
            <Image src="/Pic 1.png" alt='user' width={100} height={100} className='w-44'></Image>
            <Image src="/Pic 2.png" alt='user' width={100} height={100} className='w-44'></Image>
            <Image src="/Pic 3.png" alt='user' width={100} height={100} className='w-44'></Image>
            <Image src="/Pic 4.png" alt='user' width={100} height={100} className='w-44'></Image>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdSection