import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../../../assets/logoWhite.svg';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
interface DriverProps { }
const Driver: React.FC<DriverProps> = () => {
    const getMarginLeft = () => {
        if (window.innerWidth > 768) {
            return 100;
        } else if (window.innerWidth > 480) {
            return -80;
        } else {
            return -40;
        }
    };
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
                    <SwiperSlide key={index} style={{ marginLeft: getMarginLeft() }}>
                        <div className="flex text-2xl font-bold text-white py-6 justify-center w-fit">
                            <img className="h-8" src={Logo} alt="" />
                            <span className="flex items-center ml-2 text-white font-sans font-extrabold text-base sm:text-lg1 justify-center">
                                KidTalkie
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default Driver;
