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
            <div className="flex flex-col md:w-1/2 order-1 md:order-2">
                <h1 className="font-black text-lg4 text-orange-600">
                    KHÁM PHÁ AN TOÀN, HỌC HỎI MỖI NGÀY
                </h1>
                <p className="font-normal text-lg5 text-orange-600">
                    Ứng Dụng Giải Trí Giáo Dục Dành Cho Tâm Hồn Nhỏ!
                </p>
                <div className="flex flex-col md:flex-row md:gap-1 mt-3">
                    <img className="w-full" src={img1} alt="" />
                    <img className="w-full" src={img2} alt="" />
                    <img className="w-full" src={img3} alt="" />
                    <img className="w-full" src={img4} alt="" />
                </div>
                <div className="flex flex-col md:flex-row md:gap-1 mt-3">
                    <img className="w-full" src={img5} alt="" />
                    <img className="w-full" src={img6} alt="" />
                    <img className="w-full" src={img7} alt="" />
                    <img className="w-full" src={img8} alt="" />
                </div>
                <div className="flex gap-4 mt-9">
                    <img src={CH} width="168.98" height="55.89" alt="" className="" />
                    <img src={IOS} width="168.98" height="55.89" alt="" className="" />
                </div>
            </div>
            <div className="md:absolute md:top-0 md:right-0 md:order-1">
                <img className="h-650" src={bot} alt="" />
            </div>
        </div>
    );
}

export default Introduction;
