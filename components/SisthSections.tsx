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
        <div className='hidden lg:block'>

            <div className='flex justify-center'>
                <h2 style={{ fontSize: '35px', fontWeight: '700' }} className='font-gumela text-[#522B79] mt-16'> New Member</h2>
            </div>



            <div className="flex justify-center mb-5 mt-5">
                <div>
                    <p className='font-gumela ml-28'>
                        Every user registered on Muslim Marriagebd is verified via photo and mobile phone so you don’t have to worry how real or fake anyone is..
                    </p>  <hr /> <p className="text-center font-gumela">real or fake anyone is..</p>
                </div>

            </div>


            <div
                className='mt-10 flex justify-center justify-items-center'>
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

export default SisthSections