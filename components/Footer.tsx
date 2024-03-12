
import Image from 'next/image'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div style={{ width: '1510px', height: '502px', padding: '50px, 0px 50px, 0px', gap: '140px' }} className='bg-[#E6E6E6] mt-10 overflow-hidden p-10 mx-auto hidden lg:block'>


        {/* main part */}
        <div className='flex justify-between '>
          <div>
            <Image src="/image 2.png" alt='user' width={100} height={100}></Image>
            <h2>Lorem ipsum dolor sit amet consectetur. <hr /> Vitae et tincidunt feugiat habitasse. <hr /> Lectus maecenas ornare egestas lectus. <hr /> Sit nunc</h2>
          </div>


          <div className='text-sm'>
            <h2 className='font-bold mt-5'> About</h2>

            <h2 className=' mt-5'>About US</h2>
            <h2 className=' mt-5'>FAQ</h2>
            <h2 className=' mt-5'>Tutorials</h2>
            <h2 className=' mt-5'>Privacy Policy</h2>
            <h2 className=' mt-5'>Terms & Conditions</h2>
            <h2 className=' mt-5'>Refund Policy</h2>
          </div>




          <div>
            <h2 className='font-bold mt-5'>Contact</h2>

            <div className='flex'>
              <FaPhoneAlt className='mt-1 mr-4'></FaPhoneAlt>

              <h2>+8801700-000000</h2>
            </div>
            <div className='flex mt-3'>
              <MdOutlineEmail className='mt-1 mr-4 text-[#2D1843]'></MdOutlineEmail>
              <h2>islamicmarriage@gmail.com</h2>
            </div>
            <div className='flex mt-3'>
              <CiLocationOn className='mt-1 mr-4'></CiLocationOn>
              <h2>Banani, Dhaka-1217, <hr /> Bangladesh</h2>
            </div>
          </div>



          <div>
            <div className='ml-5'>
              <h2 className='font-bold xl:ml-24 mt-4'> Social media</h2>
              <div className='flex gap-2 xl:ml-10 mt-2'>
                <div className='h-8 w-8 bg-blue-500 rounded-md'>
                  <div className='flex justify-center mt-2'>
                    <Image src="/facebook.png" alt='user' width={15} height={10}></Image>
                  </div>
                </div>
                <div className='h-8 w-8 bg-sky-400 rounded-md'>
                  <div className='flex justify-center mt-2'>
                    <Image src="/twitter.png" alt='user' width={15} height={10}></Image>
                  </div>
                </div>
                <div className='h-8 w-8 bg-blue-700 rounded-md'>
                  <div className='flex justify-center mt-2'>
                    <Image src="/vector (1).png" alt='user' width={15} height={10}></Image>
                  </div>
                </div>
                <div className='h-8 w-8  bg-gradient-to-b from-yellow-300 via-pink-600 to-blue-600 rounded-md'>
                  <div className='flex justify-center mt-2'>
                    <Image src="/vector (2).png" alt='user' width={15} height={10}></Image>
                  </div>
                </div>
              </div>
            </div>

            <p className='text-xs mr-10'>Download the app by clicking the link below :</p>

            <div className='flex gap-3 ml-6 mt-3'>
              <Image src="/image 1.png" alt='user' width={100} height={100}></Image>
              <Image src="/image 2 (1).png" alt='user' width={100} height={100}></Image>
            </div>
          </div>
        </div>



        <div className='flex justify-between mt-20 justify-items-center'>
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