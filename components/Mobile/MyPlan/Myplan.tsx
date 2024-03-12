'use client'
import { NAV_LINKS } from '@/public/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuBellRing } from "react-icons/lu";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

export const Myplan = () => {
  return (
    <>

      {/* for small device  */}




      <div className='lg: hidden, md:hidden flex justify-between'>
        <div className='flex justify-center ml-4'>
          <FaRegArrowAltCircleLeft className='text-2xl'></FaRegArrowAltCircleLeft>

          <h2 className='font-bold ml-2 font-gumela'>My Plan</h2>
        </div>



        <div className='flex gap-3 mr-3'>
          <LuBellRing className='text-2xl mt-1'></LuBellRing>
          <Image src="/Image (1).png" alt='logo' width={30} height={30}>
          </Image>
        </div>

      </div>

      <div className='lg:hidden md:hidden'>
      

      </div>
      <div className='lg:hidden md:hidden mt-3 ml-5 '>
        <h2 className='font-bold text-xs font-gumela'>Free Plan</h2>
      </div>
      <div className='lg:hidden md:hidden '>
        <div className="w-80 border-1 ml-5 font-bold border-t border-[#3A1F56] my-5"></div>
      </div>

      {/* second part */}

      <div style={{ border: '1px solid black' }} className='bg-white rounded-md shadow-lg w-10/12 lg:hidden md:hidden mx-auto my-1'>
        <div className='flex justify-between px-6 mt-4'>
          <h2 className='text-xs'>Unlimited Plum Tree</h2>
          <RxCrossCircled className='text-red-500  '></RxCrossCircled>
        </div>
        <div style={{width: '311px'}} className=" border-1  border-t border-[#3A1F56] my-1">
          <div className='flex justify-between px-6 mt-4'>
            <h2 className='text-xs'>Unlimited Plum Tree</h2>
            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
          </div>
        </div>
        <div style={{width: '311px'}} className=" border-1  border-t border-[#3A1F56] my-1">
          <div  className='flex justify-between px-6 mt-4'>
            <h2 className='text-xs'>Unlimited Plum Tree</h2>
            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
          </div>
        </div>
        <div style={{width: '311px'}} className=" border-1  border-t border-[#3A1F56] my-1">
          <div className='flex justify-between px-6 mt-4'>
            <h2 className='text-xs'>Unlimited Plum Tree</h2>
            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
          </div>
        </div>
        <div style={{width: '311px'}} className=" border-1  border-t border-[#3A1F56] my-1">
          <div className='flex justify-between px-6 mt-4'>
            <h2 className='text-xs'>Unlimited Plum Tree</h2>
            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
          </div>
        </div>
        <div style={{width: '311px'}} className=" border-1  border-t border-[#3A1F56] my-1">
          <div className='flex justify-between px-6 mt-4'>
            <h2 className='text-xs'>Unlimited Plum Tree</h2>
            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
          </div>
        </div>
        <div style={{width: '311px'}} className=" border-1  border-t border-[#3A1F56] my-1">
          <div className='flex justify-between px-6 mt-4'>
            <h2 className='text-xs'>Unlimited Plum Tree</h2>
            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
          </div>
        </div>
        <div style={{width: '311px'}} className=" border-1  border-t border-[#3A1F56] my-1">
          <div className='flex justify-between px-6 mt-4'>
            <h2 className='text-xs'>Unlimited Plum Tree</h2>
            <RxCrossCircled className='text-red-500 '></RxCrossCircled>
          </div>
        </div>
      </div>

      {/* third part */}

      <div className=' justify-center font-gumela lg:hidden md:hidden mt-36 ml-8 cursor-pointer'>
        <button style={{ borderRadius: '8px', border: '1px solid #2D1843', gap: '10px' }} className='m-3 px-24 py-4 border flex bg-gradient-to-tr from-[#410F2F] to-[#8C2065] justify-center font-bold text-white text-sm items-center  '>


          Upgrade Plan
        </button>
      </div>


    </>
  )
}
