import { useEffect, useRef, useState } from 'react';
import BigTop from '../../../assets/Shape/BigTop.svg';
import SmallTop from '../../../assets/Shape/SmallTop.svg';
import BigBot from '../../../assets/Shape/BigBot.svg';
import SmallBot from '../../../assets/Shape/SmallBot.svg';
import Kid from '../../../assets/kid.svg';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import { toast } from 'react-toastify';
import { RegisterAPI } from '@/utils/registerAPI';
import { ProvincesAPI } from '@/utils/provincesAPI';

interface IncentivesProps { }
interface Province {
    name: string;
}
function Incentives({ }: IncentivesProps): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [selected, setSelected] = useState('');
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
        fullName: '',
        email: '',
        referralCodeOther: '',
    });
    useEffect(() => {
        ProvincesAPI.getProvinces()
            .then((res) => setProvinces(res.data.data.data))
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        RegisterAPI.register(input.fullName, input.email, selected, input.referralCodeOther)
            .then((res) => {
                console.log(res);
                setInput({
                    fullName: '',
                    email: '',
                    referralCodeOther: '',
                });
                setSelected('');
                toast.success('Đăng ký thành công');
            })
            .catch((error) => { console.log(error); toast.error("Đăng ký không thành công, vui lòng kiểm tra lại!") });
    };
    return (
        <div style={{ paddingLeft: "12%", paddingRight: "12%" }}>
            <h1 className="font-sans font-extrabold text-lg2 text-orange-600 text-center">
                ƯU ĐÃI ĐĂNG KÝ TRƯỚC
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
                                className="block font-semibold text-base leading-6 text-gray-900 mb-2">
                                Tên người đăng ký
                            </label>
                            <div className="flex border rounded-full shadow-sm">
                                <input
                                    type="text"
                                    id="fullName"
                                    className="block peer flex-1 border text-base rounded-full shadow-sm bg-transparent px-5 py-3"
                                    required
                                    pattern="^[a-zA-ZÀ-ỹ\s]*$"
                                    value={input.fullName}
                                    onChange={(e) => setInput({ ...input, fullName: e.target.value })}
                                />
                            </div>
                            <label
                                htmlFor="Email"
                                className="block font-semibold text-base leading-6 text-gray-900 my-2">
                                Địa chỉ Email
                            </label>
                            <div className="flex border rounded-full shadow-sm">
                                <input
                                    type="email"
                                    id="email"
                                    className="block peer flex-1 border text-base rounded-full shadow-sm bg-transparent px-5 py-3"
                                    required
                                    value={input.email}
                                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                                />
                            </div>
                            <label
                                htmlFor="Province"
                                className="block font-semibold text-base leading-6 text-gray-900 my-2">
                                Tỉnh
                            </label>
                            <div ref={ref} className="relative border rounded-full shadow-sm">
                                <div
                                    className={`peer flex-1 border text-base shadow-sm bg-transparent px-5 py-3 flex justify-between items-center rounded-full ${!selected && 'text-gray-700'}`}
                                    onClick={() => setOpen(!open)}>
                                    {selected
                                        ? selected?.length > 25
                                            ? selected?.substring(0, 25) + '...'
                                            : selected
                                        : 'Chọn tỉnh của bạn'}
                                    <IconChevronDown size={20} />
                                </div>
                                <ul
                                    className={`absolute z-10 bg-gray-100 rounded-xl w-full overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'
                                        } `}>
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
                                    {Array.isArray(provinces) && provinces.length > 0 && provinces.map((province) => (
                                        <li
                                            key={province?.name}
                                            className={`p-2 text-base hover:bg-primary-100 hover:text-white ${province?.name?.toLowerCase().includes(inputValue.toLowerCase())
                                                ? 'block'
                                                : 'hidden'
                                                }`}
                                            onClick={() => {
                                                if (province?.name !== selected) {
                                                    setSelected(province?.name);
                                                    setOpen(false);
                                                    setInputValue('');
                                                }
                                            }}>
                                            {province?.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <label
                                htmlFor="referralCodeOther"
                                className="block font-semibold text-base leading-6 text-gray-900 my-2">
                                Mã giới thiệu
                            </label>
                            <div className="flex border rounded-full shadow-sm">
                                <input
                                    type="text"
                                    id="referralCodeOther"
                                    className="block peer flex-1 border text-base rounded-full shadow-sm bg-transparent px-5 py-3"
                                    value={input.referralCodeOther}
                                    onChange={(e) => setInput({ ...input, referralCodeOther: e.target.value })}
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
            </div>
        </div>
    );
}
export default Incentives;
