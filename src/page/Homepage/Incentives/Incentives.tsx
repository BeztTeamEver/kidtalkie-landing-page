import { useEffect, useRef, useState } from 'react';
import BigTop from '../../../assets/Shape/BigTop.svg';
import SmallTop from '../../../assets/Shape/SmallTop.svg';
import BigBot from '../../../assets/Shape/BigBot.svg';
import SmallBot from '../../../assets/Shape/SmallBot.svg';
import Kid from '../../../assets/kid.svg';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import { toast } from 'react-toastify';

interface IncentivesProps { }
interface Province {
    name: string;
}
function Incentives({ }: IncentivesProps): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
    // const [nameError, setNameError] = useState('');
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/p/?fields=name')
            .then((res) => res.json())
            .then((data: Province[]) => {
                setProvinces(data);
            });
    }, []);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log('1');
        event.preventDefault();
        toast.success("a");
    };
    // const handleInvalid = (e) => {
    //     e.preventDefault(); // Ngăn không cho browser hiển thị thông báo mặc định
    //     if (e.target.validity.patternMismatch) {
    //         setNameError('Chỉ được nhập chữ cái và khoảng trắng');
    //     } else {
    //         setNameError('');
    //     }
    // };
    return (
        <div className="p-6">
            <h1 className="font-sans font-extrabold text-lg2 text-orange-600 text-center">
                ƯU Đãi ĐĂNG KÝ TRƯỚC
            </h1>
            <div className="flex flex-row p-2">
                <div className="border flex flex-col justify-between rounded-lg shadow-xl p-4 lg:flex-1 font-sans font-normal text-lg3 mr-20">
                    <div className="p-4">
                        🚀 Chào mừng bạn đến với hành trình mới cùng KidTalkie! Chỉ cần là một trong 10 người
                        đầu tiên đăng ký, bạn sẽ được trải nghiệm miễn phí tất cả tính năng trong vòng 3 tháng
                        đầu tiên! Đừng bỏ lỡ cơ hội trở thành những người pionner, hãy đăng ký ngay!
                    </div>
                    <div className="p-4">
                        🎁 Đối với 200 tài khoản tiếp theo, chúng tôi sẽ tặng ngẫu nhiên voucher giảm giá từ 50%
                        - 90%, giúp bạn tiết kiệm đáng kể khi trải nghiệm dịch vụ của chúng tôi.
                    </div>
                    <div className="p-4">
                        🎉 Để làm cho trải nghiệm của bạn thêm phần phong phú, tất cả các tài khoản đăng ký đều
                        nhận được 1000 năng lượng miễn phí! Hãy cùng nhau khám phá và tận hưởng những tính năng
                        mới mẻ mà chúng tôi mang đến.
                    </div>
                    <div className="p-4">
                        🌟 Hãy đồng hành cùng chúng tôi trong bộ chủ đề mừng ứng dụng ra mắt, để chúng ta cùng
                        nhau xây dựng một cộng đồng sôi động và đầy năng lượng! Đăng ký ngay để không bỏ lỡ
                        những ưu đãi hấp dẫn! 🌈
                    </div>
                    <div className="p-4 text-orange-500">#WelcomeToInnovation #DiscoverNewFeatures</div>
                </div>
                <div className="flex flex-col lg:flex-1 justify-between">
                    <form className="flex flex-col border rounded-lg shadow-xl p-8" onSubmit={handleSubmit}>
                        <h1 className="font-sans font-extrabold text-2xl text-orange-600 text-center ">
                            Đăng ký sớm
                        </h1>
                        <div className="my-4">
                            <label
                                htmlFor="Name"
                                className="block font-semibold text-base leading-6 text-gray-900">
                                Tên người đăng ký
                            </label>
                            <div className="flex border rounded-full shadow-sm mt-1">
                                <input
                                    type="text"
                                    id="name"
                                    className="block peer flex-1 border text-base rounded-full shadow-sm bg-transparent py-1.5 p-3"
                                    required
                                    pattern='^[a-zA-ZÀ-ỹ\s]*$'
                                // onInvalid={handleInvalid}
                                />
                            </div>
                            {/* {nameError && <p className="text-red-600 text-sm mt-1">{nameError}</p>} */}
                            <label
                                htmlFor="Email"
                                className="block font-semibold text-base leading-6 text-gray-900">
                                Địa chỉ Email
                            </label>
                            <div className="flex border rounded-full shadow-sm mt-1">
                                <input
                                    type="email"
                                    id="email"
                                    className="block peer flex-1 border text-base rounded-full shadow-sm bg-transparent py-1.5 p-3"
                                    required
                                />
                            </div>
                            <label
                                htmlFor="Province"
                                className="block font-semibold text-base leading-6 text-gray-900">
                                Tỉnh
                            </label>
                            <div ref={ref} className="relative border rounded-full shadow-sm mt-1">
                                <div className={`peer flex-1 border text-base shadow-sm bg-transparent py-1.5 p-3 flex justify-between items-center rounded-full ${!selected && "text-gray-700"}`} onClick={() => setOpen(!open)}>
                                    {selected
                                        ? selected?.length > 25
                                            ? selected?.substring(0, 25) + "..."
                                            : selected
                                        : "Chọn tỉnh của bạn"}
                                    <IconChevronDown size={20} />
                                </div>
                                <ul
                                    className={`absolute z-10 bg-gray-100 rounded-xl w-full overflow-y-auto ${open ? "max-h-60" : "max-h-0"
                                        } `}
                                >
                                    <div className="flex items-center px-2 sticky top-0 bg-gray-100">
                                        <IconSearch size={18} className="text-gray-700" />
                                        <input
                                            type="text"
                                            placeholder="Nhập tỉnh vào đây"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            className="placeholder:text-gray-700 bg-gray-100 p-2 outline-none w-full"
                                        />
                                    </div>
                                    {provinces?.map((province) => (
                                        <li
                                            key={province?.name}
                                            className={`p-2 text-base hover:bg-primary-100 hover:text-white ${province?.name?.includes(inputValue)
                                                ? "block"
                                                : "hidden"}`}
                                            onClick={() => {
                                                if (province?.name !== selected) {
                                                    setSelected(province?.name);
                                                    setOpen(false);
                                                    setInputValue("");
                                                }
                                            }} >
                                            {province?.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <label
                                htmlFor="referralCodeOther"
                                className="block font-semibold text-base leading-6 text-gray-900">
                                Mã giới thiệu
                            </label>
                            <div className="flex border rounded-full shadow-sm mt-1">
                                <input
                                    type="text"
                                    id="referralCodeOther"
                                    className="block peer flex-1 border text-base rounded-full shadow-sm bg-transparent py-1.5 p-3"
                                />
                            </div>
                            <div className="relative w-full my-3">
                                <img src={BigTop} className="absolute top-5 left-3" alt="" />
                                <img src={SmallTop} className="absolute top-8 left-2" alt="" />
                                <button
                                    type="submit"
                                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-extrabold py-2 px-4 rounded-full font-sans shadow-md shadow-orange-600 mt-4 text-lg">
                                    Nhanh tay đăng ký trước ngay
                                </button>
                                <img src={BigBot} className="absolute top-8 right-1" alt="" />
                                <img src={SmallBot} className="absolute top-12 right-4" alt="" />
                            </div>
                        </div>
                    </form>
                    <div className="flex items-center justify-center">
                        <img src={Kid} alt="" />
                    </div>
                </div>
            </div >
        </div >
    );
}
export default Incentives;
