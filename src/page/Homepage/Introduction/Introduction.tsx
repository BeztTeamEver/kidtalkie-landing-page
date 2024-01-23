import img1 from "../../../assets/img1.svg";
import bot from "../../../assets/botAnimation.gif";
import img2 from "../../../assets/img2.svg";
import img3 from "../../../assets/img3.svg";
import img4 from "../../../assets/img4.svg";
import img5 from "../../../assets/img5.svg";
import img6 from "../../../assets/img6.svg";
import img7 from "../../../assets/img7.svg";
import img8 from "../../../assets/img8.svg";
import CH from "../../../assets/CHplay.svg";
import IOS from "../../../assets/IOS.svg";
interface IntroductionProps { }
function Introduction({ }: IntroductionProps): JSX.Element {
    return (
        <div className="flex justify-between mx-auto p-6 h-fit">
            <div className="flex flex-col">
                <h1 className="font-sans font-black text-lg4 text-orange-600">KHÁM PHÁ AN TOÀN, HỌC HỎI MỖI NGÀY</h1>
                <p className="font-sans font-normal text-lg5  text-orange-600 ">Ứng Dụng Giải Trí Giáo Dục Dành Cho Tâm Hồn Nhỏ!</p>
                <div className="grid grid-cols-4 gap-1 mt-3 w-full">
                    <img
                        className="w-full"
                        src={img1}
                        alt=""
                    />
                    <img
                        className="w-full"
                        src={img2}
                        alt=""
                    />
                    <img
                        className="w-full"
                        src={img3}
                        alt=""
                    />
                    <img
                        className="w-full"
                        src={img4}
                        alt=""
                    />
                    <img
                        className="w-full"
                        src={img5}
                        alt=""
                    />
                    <img
                        className="w-full"
                        src={img6}
                        alt=""
                    />
                    <img
                        className="w-full"
                        src={img7}
                        alt=""
                    />
                    <img
                        className="w-full"
                        src={img8}
                        alt=""
                    />
                </div>
                <div className="flex flex-1 gap-4 mt-9">
                    <img src={CH} width="168.98" height="55.89" alt="" className="hover:cursor-pointer" />
                    <img src={IOS} width="168.98" height="55.89" alt="" className="hover:cursor-pointer" />
                </div>
            </div>
            <div className="absolute top-0 right-10">
                <img
                    className="h-650"
                    src={bot}
                    alt=""
                />
            </div>
        </div>
    );
}
export default Introduction;