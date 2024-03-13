'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { on } from 'events';
const FourthSections = () => {
    return (
        <>
            <div className='hidden lg:block'>
                <div
                    className=' flex justify-center justify-items-center mt-5  px-72'>
                    <div className='container'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={50}

                            pagination={{
                                clickable: true,


                            }}
                            modules={[Pagination]}
                            
                            className="mySwiper"
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
                                    slidesPerView: 5,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-10'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-10'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-10'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-10'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-10'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-10'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-10'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-10'></Image>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-60'>

                                    <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-full  p-10'></Image>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>

            </div>




        </>
    )
}

export default FourthSections