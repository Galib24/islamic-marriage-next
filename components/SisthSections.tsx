'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { on } from 'events';

const SisthSections = () => {
    return (
        <>
            <div>
                <h2 style={{ fontSize: '35px', fontWeight: '700' }} className='text-center text-[#522B79] mt-16 mb-5'>New Member</h2>
            </div>


            <div className="flex justify-center  mt-5">
                <div>
                    <p className='font-gumela tect-center'>
                        Every user registered on Muslim Marriagebd is verified via photo and mobile phone so you don’t have to worry how
                    </p>

                    <p className='text-center'>real or fake anyone is.. </p>
                </div>



            </div>
            <div className='hidden lg:block '>
                <div
                    className=' flex justify-center justify-items-center  '>
                    <div className='container px-36 ml-32'>
                        <Swiper
                            slidesPerView={6}


                            pagination={{
                                clickable: true,


                            }}
                            modules={[Pagination]}

                            className="mySwiper "
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 5,
                                },
                                620: {
                                    slidesPerView: 2,
                                    spaceBetween: 5,
                                },
                                840: {
                                    slidesPerView: 6,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-6'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-6'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-6'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-6'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-6'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-6'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-6'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-6'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60 '>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-6'></Image>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>

            </div>


        </>
    )
}

export default SisthSections