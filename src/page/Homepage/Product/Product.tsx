import ChatBox from "../../../assets/chatbox.svg";
interface ProductProps { }
function Product({ }: ProductProps): JSX.Element {
    return (
        <div className="px-36">
            <h1 className="font-sans font-extrabold text-lg2 text-orange-600 text-center mb-14">LIÊN LẠC AN TOÀN, DÀNH RIÊNG CHO GIA ĐÌNH</h1>
            <div className="flex flex-row justify-between gap-14 items-center">
                <img className="basis-1/2 h-675" src={ChatBox} alt="" />
                <div className="border rounded-lg shadow-xl p-4 basis-1/2 font-sans font-normal text-lg3 ">
                    <p className="p-4">Điểm độc đáo KidTalkie là khả năng chuyển đổi linh hoạt giữa giọng nói và văn bản, mang lại trải nghiệm giao tiếp đa chiều và thuận lợi.</p>
                    <p className="p-4">Đặc biệt, chúng tôi tự hào về tính năng theo dõi vị trí và hoạt động, giúp phụ huynh an tâm hơn khi theo dõi con cái trong thế giới kỹ thuật số ngày nay.</p>
                    <p className="p-4">Bạn sẽ luôn được cập nhật về vị trí và hoạt động của con cái mình, giúp tăng cường giao tiếp và quản lý gia đình một cách hiệu quả.</p>
                </div>
            </div>
        </div >
    );
}
export default Product;