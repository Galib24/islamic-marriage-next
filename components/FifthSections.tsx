import Image from 'next/image'
import React from 'react'

const FifthSections = () => {
  return (
    <>
    <div className='hidden lg:block'>
      <div className='flex justify-center'>
        <h2 style={{ fontSize: '35px', fontWeight: '700' }} className='font-gumela text-[#522B79]'> Trusted by Millions</h2>
      </div>



      <div className="flex justify-center mb-5 mt-5">
        <div>
          <p className='font-gumela tect-center'>
            "Love doesn't make the world go around. Love is what makes the ride worthwhile." Millions of Active Matrimonial
          </p> <hr />   <p className="ml-28 font-gumela">
            users around the world find their true love and partners from this site. We are always there to help and find you the
          </p> <hr /> <p className="text-center font-gumela">suitable match for yourself.</p>
        </div>



      </div>

      <div className='w-full flex justify-center mt-7'>
        <div className='flex gap-5'>
          <Image src="/Frame 2031.png" alt='user' width={100} height={100} className='w-44'></Image>
          <Image src="/Frame 2032.png" alt='user' width={100} height={100} className='w-44'></Image>
          <Image src="/Frame 2033.png" alt='user' width={100} height={100} className='w-44'></Image>

        </div>
      </div>
      </div>
    </>
  )
}

export default FifthSections