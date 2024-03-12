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
                    className='mt-10 flex justify-center justify-items-center mb-10 '>
                    <div className='container'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={0}

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
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <Image src="/Premium (1).png" alt='user' width={100} height={100} className='w-6/12'></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Premium.png" alt='user' width={100} height={100} className='w-6/12'></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Premium.png" alt='user' width={100} height={100} className='w-6/12'></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Premium.png" alt='user' width={100} height={100} className='w-6/12'></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Premium.png" alt='user' width={100} height={100} className='w-6/12'></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Premium.png" alt='user' width={100} height={100} className='w-6/12'></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Premium.png" alt='user' width={100} height={100} className='w-6/12'></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Premium.png" alt='user' width={100} height={100} className='w-6/12'></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Premium.png" alt='user' width={100} height={100} className='w-6/12'></Image>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>

            </div>




        </>
    )
}

export default FourthSections