import img1 from '../../../assets/img1.png';
import bot from '../../../assets/botAnimation.gif';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';
import img5 from '../../../assets/img5.png';
import img6 from '../../../assets/img6.png';
import img7 from '../../../assets/img7.png';
import img8 from '../../../assets/img8.png';
import CH from '../../../assets/CHplay.svg';
import IOS from '../../../assets/IOS.svg';

function Introduction(): JSX.Element {
    return (
        <div className="flex flex-col md:flex-row-1 sm:flex-row-1 lg:flex-row-1 xl:flex-row-1 md:justify-between mx-auto p-10">
            <div className="flex flex-col order-1 sm:order-2 w-full">
                <div className="font-black text-orange-600 w-full text-xs sm:text-base md:text-xl lg:text-2xl lg:w-3/5 xl:text-lg4">
                    KHÁM PHÁ AN TOÀN, HỌC HỎI MỖI NGÀY
                </div>
                <p className="font-normal text-orange-600 text-lg10 sm:text-xs lg:text-xl xl:text-lg5">
                    Ứng Dụng Giải Trí Giáo Dục Dành Cho Tâm Hồn Nhỏ!
                </p>
                <div className="flex flex-row sm:flex-row sm:gap-1 mt-3 sm:w-1/2">
                    <img className="w-1/4 sm:w-1/4" src={img1} alt="" />
                    <img className="w-1/4 sm:w-1/4" src={img2} alt="" />
                    <img className="w-1/4 sm:w-1/4" src={img3} alt="" />
                    <img className="w-1/4 sm:w-1/4" src={img4} alt="" />
                </div>
                <div className="flex flex-row sm:flex-row sm:gap-1 mt-3 sm:w-1/2">
                    <img className="w-1/4 sm:w-1/4" src={img5} alt="" />
                    <img className="w-1/4 sm:w-1/4" src={img6} alt="" />
                    <img className="w-1/4 sm:w-1/4" src={img7} alt="" />
                    <img className="w-1/4 sm:w-1/4" src={img8} alt="" />
                </div>
                <div className="flex gap-4 mt-9">
                    <img src={CH} width="168.98" height="55.89" alt="" className="w-1/3 sm:w-1/5 lg:w-1/6 xl:w-1/6" />
                    <img src={IOS} width="168.98" height="55.89" alt="" className="w-1/3 sm:w-1/5 lg:w-1/6 xl:w-1/6" />
                </div>
            </div>
            <img className="top-5 mb-4 sm:absolute sm:w-1/2 sm:h-96 sm:right-0 sm:top-10 sm:order-1 md:h-auto md:w-1/2 lg:w-1/2 lg:h-500 xl:top-0 xl:h-700" src={bot} alt="" />
        </div>
    );
}

export default Introduction;
