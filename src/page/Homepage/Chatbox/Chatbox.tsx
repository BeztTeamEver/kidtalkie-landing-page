import Box from '../../../assets/box.svg';
import Body from '../../../assets/Body.svg';
import Record from '../../../assets/Record.svg';
import Clothes1 from '../../../assets/Clothes/C1.svg';
import Clothes2 from '../../../assets/Clothes/C2.svg';
import Clothes3 from '../../../assets/Clothes/C3.svg';
import Clothes4 from '../../../assets/Clothes/C4.svg';
import Clothes5 from '../../../assets/Clothes/C5.svg';
import Clothes6 from '../../../assets/Clothes/C6.svg';
interface ChatboxProps { }
function ChatBox({ }: ChatboxProps): JSX.Element {
    return (
        <div className="mt-10 sm:mx-24 xl:mx-20">
            <h1 className="font-sans font-extrabold text-xl md:text-lg2 text-orange-600 text-center">
                NGƯỜI BẠN ĐỒNG HÀNH CÙNG TRẺ
            </h1>
            <div className="flex flex-col md:flex-row mt-10 p-6 gap-4">
                <div className="basis-1/3 mt-2">
                    <div className="grid border w-4/5 sm:w-3/5 md:w-full lg:w-full xl:w-11/12 p-4 rounded-full ml-auto shadow-md">
                        <p className="truncate font-bold border-r-2 border-solid border-black tracking-widest animate-typing md:text-lg10 lg:text-sm xl:text-lg7">
                            1. Botchat AI trả lời các câu hỏi
                        </p>
                    </div>
                    <img className="mt-4 p-3 w-full lg:w-11/12 " src={Box}></img>
                    <div className="grid border w-3/4 sm:w-1/2 md:w-4/5 lg:w-3/4 xl:w-3/4 mr-3 mt-4 p-4 rounded-full shadow-md ml-auto">
                        <p className="truncate font-bold border-r-2 border-solid border-black tracking-widest animate-typing md:text-lg10 lg:text-sm xl:text-lg7">
                            3. Xem lại lịch sử câu hỏi
                        </p>
                    </div>
                </div>
                <div className="flex flex-col basis-1/3">
                    <img className="h-3/4 animate-spinV2" src={Body} alt="" />
                    <img className="h-28 animate-pulseV2" src={Record} alt="" />
                </div>
                <div className="basis-1/3">
                    <div className="grid border w-4/5 sm:w-1/2 md:w-full lg:w-11/12 xl:w-4/5 p-4 rounded-full mr-auto shadow-md ">
                        <p className="truncate font-bold border-r-2 border-solid border-black tracking-widest animate-typing md:text-lg10 lg:text-sm xl:text-lg7">
                            2. Sử dụng giọng nói để hỏi
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-1 mt-6 ml-4 p-4 w-full lg:w-11/12 justify-start">
                        <img className="w-full hover:animate-spinV3" src={Clothes1} alt="" />
                        <img className="w-full hover:animate-spinV3" src={Clothes2} alt="" />
                        <img className="w-full hover:animate-spinV3" src={Clothes3} alt="" />
                        <img className="w-full hover:animate-spinV3" src={Clothes4} alt="" />
                        <img className="w-full hover:animate-spinV3" src={Clothes5} alt="" />
                        <img className="w-full hover:animate-spinV3" src={Clothes6} alt="" />
                    </div>
                    <div className="grid border w-11/12 sm:w-3/5 md:w-full lg:w-11/12 xl:w-4/5 mt-6 p-4 rounded-full mr-auto shadow-md ml-4">
                        <p className="truncate font-bold border-r-2 border-solid border-black tracking-widest animate-typing md:text-lg10 lg:text-sm xl:text-lg7">
                            4. Thỏa sức thời trang cùng Bí Ngô
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatBox;
