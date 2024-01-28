import { IconNorthStar } from '@tabler/icons-react';
import TableCost from "../../assets/costTable.svg";
interface CostProps { }
export default function Cost({ }: CostProps): JSX.Element {
    return (
        <div className="flex flex-col ">
            <div className="flex flex-row justify-center gap-3">
                <IconNorthStar size={50} className="text-primary-600" />
                <span className="flex items-center font-sans font-extrabold text-lg8 text-center uppercase text-primary-600">
                    các gói dịch vụ
                </span>
                <IconNorthStar size={50} className="text-primary-600" />
            </div>
            <div className='flex flex-row gap-10 p-16'>
                <div className='flex flex-col border rounded-lg1 basis-1/3 p-10 justify-center text-center items-center shadow-2xl'>
                    <h1 className='font-inter font-semibold text-lg1 text-neutral-700'>Gói trải nghiệm</h1>
                    <h1 className='font-inter font-semibold text-lg9 text-neutral-800 mt-4'>0đ</h1>
                    <p className='font-inter font-normal italic text-lg text-neutral-600'>1 tài khoản gia đình/7 ngày</p>
                    <p className='font-inter font-normal text-lg text-neutral-600 mt-10'>
                        Một cơ hội tuyệt vời để phụ huynh và bé khám phá và trải nghiệm mọi tính năng nổi bật trên KidTalkie một cách dễ dàng và thoải mái.<br />
                        Từ đó yên tâm cho trẻ vui chơi và sáng tạo cùng KidTalkie hơn ;)
                    </p>
                </div>
                <div className='flex flex-col border rounded-lg1 basis-1/3 p-10  text-center items-center shadow-2xl'>
                    <h1 className='font-inter font-semibold text-lg1 text-neutral-700'>Gói cơ bản</h1>
                    <h1 className='font-inter font-semibold text-lg9 text-neutral-800 mt-4'>140.000<sup>vnđ</sup></h1>
                    <p className='font-inter font-normal italic text-lg text-neutral-600'>1 tài khoản gia đình/1 tháng</p>
                    <p className='font-inter font-normal text-lg text-neutral-600 mt-10'>
                        Gồm các tính năng cơ bản đủ để bé tự do phát triển và gắn kết với bạn bè. Tuy nhiên ở gói này phụ huynh không thể dõi theo các hoạt động của con một cách toàn diện
                    </p>
                </div>
                <div className='flex flex-col border rounded-lg1 basis-1/3 p-10  text-center items-center shadow-2xl'>
                    <h1 className='font-inter font-semibold text-lg1 text-neutral-700'>Gói toàn diện</h1>
                    <h1 className='font-inter font-semibold text-lg9 text-neutral-800 mt-4'>320.000<sup>vnđ</sup></h1>
                    <p className='font-inter font-normal italic text-lg text-neutral-600'>1 tài khoản gia đình/1 tháng</p>
                    <p className='font-inter font-normal text-lg text-neutral-600 mt-10'>
                        Phụ huynh và bé được trải nghiệm toàn diện tất cả tính năng hiện có của KidTalkie: Vui chơi, Sáng tạo, An toàn và Kết nối                    </p>
                </div>
            </div>
            <img className='p-16' src={TableCost} />
        </div>
    );
}
