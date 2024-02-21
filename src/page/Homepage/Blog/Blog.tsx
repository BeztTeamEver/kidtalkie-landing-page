import blog from "../../../assets/Blog.svg";
interface BlogProps { }
function Blog({ }: BlogProps): JSX.Element {
    return (
        <div className="px-10 sm:mx-24 xl:px-44 mb-14 ">
            <h1 className="font-sans font-extrabold text-2xl lg:text-lg2 text-orange-600 text-center mt-20">GIẢI TRÍ LÀNH MẠNH, KÍCH THÍCH SỰ SÁNG TẠO</h1>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="border-2 rounded-lg shadow-xl p-4 font-sans font-normal lg:text-lg3 lg:w-2/3 xl:w-2/3 order-2 lg:order-1">
                    <p className="p-4">Khám phá và kích thích tò mò của trẻ với những bài viết giáo dục đầy sinh động tại KidTalkie!</p>
                    <p className="p-4">Chúng tôi tự hào giới thiệu một thế giới tri thức mới, nơi mà học không chỉ là một nhiệm vụ, mà còn là một cuộc phiêu lưu thú vị. Các bài viết được chọn lọc không chỉ mang lại kiến thức sâu sắc mà còn đánh thức tò mò, khám phá và sự sáng tạo ẩn sau mỗi chủ đề.</p>
                </div>
                <img className="lg:w-1/2 xl:w-1/2 order-1 lg:order-2" src={blog} alt="" />
            </div>
        </div>
    );
}
export default Blog;