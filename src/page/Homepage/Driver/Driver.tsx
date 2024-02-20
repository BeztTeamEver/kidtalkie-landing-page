import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../../../assets/logoWhite.svg';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
interface DriverProps { }
const Driver: React.FC<DriverProps> = () => {
    return (
        <Swiper
            spaceBetween={100}
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
            }}
            loop
            modules={[Autoplay]}
            className="mySwiper bg-orange-500"
            slidesPerView={6}
            centeredSlides
            speed={1000}>
            {Array(30)
                .fill(0)
                .map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex text-2xl font-bold text-white py-6 justify-center">
                            <img className="h-8 w-auto" src={Logo} alt="" />
                            <span className="flex items-center ml-2 text-white font-sans font-extrabold text-lg1 justify-center">
                                KidTalkie
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default Driver;
