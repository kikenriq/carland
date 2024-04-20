'use client'

import Image from "next/image"
import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    message:'They truly excced my expectations and made my car rental experience a delight',
    avatar: '/images/testimonial/avatar.png',
    name: 'Joe Doe',
    job: 'Photographer & Videographer',
  },
  {
    message:'They truly excced my expectations car rental experience a delight',
    avatar: '/images/testimonial/avatar.png',
    name: 'Joe Doe',
    job: 'Photographer & Videographer',
  },
];

export const TestimonialSlider = () => {
  return (
    <div>
        <Swiper
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="h-[458px] xl:h-[400px]"
        >
            {testimonialData.map((person, index) =>{
                const { message, avatar, name, job } = person;
                return (
                <SwiperSlide key={index}>
                    <div className="flex flex-col justify-center items-center text-center">
                        <FaQuoteLeft className="text-7xl text-accent mb-6"/>
                        <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">{message}</div>
                        <Image
                            src={avatar}
                            width={64}
                            height={64}
                            alt=""
                            className="mb-4"
                        />
                        <div className="text-lg font-medium">{name}</div>
                        <div className="text-secundary">{job}</div>
                    </div>
                </SwiperSlide>)
            })}
        </Swiper>
    </div>
  )
}
