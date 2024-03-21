
import Image from 'next/image'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div style={{ width: '1500px', height: '500px', padding: '50px, 0px 50px, 0px', gap: '140px' }} className='bg-[#E6E6E6] mt-10 overflow-hidden p-16 mx-auto hidden lg:block'>


        {/* main part */}
        <div className='flex justify-between '>
          <div>
            <Image src="/image 2.png" alt='user' width={100} height={79}></Image>
            <h2>Lorem ipsum dolor sit amet consectetur. <hr /> Vitae et tincidunt feugiat habitasse. <hr /> Lectus maecenas ornare egestas lectus. <hr /> Sit nunc</h2>
          </div>


          <div className='text-sm'>
            <h2 className='font-bold mt-5 cursor-pointer'> About</h2>

            <h2 className=' mt-5 cursor-pointer'>About US</h2>
            <h2 className=' mt-5 cursor-pointer'>FAQ</h2>
            <h2 className=' mt-5 cursor-pointer'>Tutorials</h2>
            <h2 className=' mt-5 cursor-pointer'>Privacy Policy</h2>
            <h2 className=' mt-5 cursor-pointer'>Terms & Conditions</h2>
            <h2 className=' mt-5 cursor-pointer'>Refund Policy</h2>
          </div>




          <div>
            <h2 className='font-bold mt-5 mb-3'>Contact</h2>

            <div className='flex'>
              <FaPhoneAlt color='#9A236F' className='mt-1 mr-4 '></FaPhoneAlt>

              <h2>+8801700-000000</h2>
            </div>
            <div className='flex mt-3'>
              <MdEmail color='#9A236F' className='mt-1 mr-4 text-[#2D1843]'></MdEmail>
              <h2>islamicmarriage@gmail.com</h2>
            </div>
            <div className='flex mt-3'>
              <FaLocationDot color='#9A236F' className='mt-1 mr-4'></FaLocationDot>
              <h2>Banani, Dhaka-1217, <hr /> Bangladesh</h2>
            </div>
          </div>



          <div className=''>
            <div className=' w-[285px] flex flex-col gap-5 items-end'>
              <h2 className='font-bold mr-4'> Social media</h2>

              <div className='flex gap-2 '>
                <div className='h-10 w-10 bg-[#1877F2] flex justify-center rounded-md'>
                  <div className=' mt-2'>
                    <Image src="/facebook.png" alt='user' width={20} height={20}></Image>
                  </div>
                </div>
                <div className='h-10 w-10 bg-sky-400  flex justify-center rounded-md'>
                  <div className=' mt-3'>
                    <Image src="/twitter.png" alt='user' width={20} height={20}></Image>
                  </div>
                </div>
                <div className='h-10 w-10 bg-[#1DA1F2] rounded-md flex justify-center'>
                  <div className=' mt-2'>
                    <Image src="/vector (1).png" alt='user' width={26} height={26}></Image>
                  </div>
                </div>
                <div className='h-10 w-10  bg-gradient-to-b from-yellow-300 via-pink-600 to-blue-600 rounded-md flex justify-center'>
                  <div className=' mt-2'>
                    <Image src="/vector (2).png" alt='user' width={26} height={26}></Image>
                  </div>
                </div>
              </div>
            </div>



            <div className='flex gap-3 ml-6 mt-3   flex-col w-[260px]'>
              <p className='text-xs pr-4  '>Download the app by clicking the link below :</p>
              <div className='flex justify-between'>
              <Image src="/image 1.png" alt='user' width={120} height={100}></Image>
              <Image src="/image 2 (1).png" alt='user' width={120} height={100}></Image>
              </div>
            </div>
          </div>
        </div>



        <div className='flex justify-between mt-5 justify-items-center'>
          <div className="w-96 h-5 border-t border-black my-10"></div>

          <h2 className='text-xs mt-8 '>
            Copyright @2024
          </h2>
          <div className="w-96 h-5 border-t border-black my-10"></div>
        </div>
      </div>






    </>
  )
}

export default Footer