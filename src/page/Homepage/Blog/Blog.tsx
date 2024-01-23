import blog from "../../../assets/Blog.svg";
interface BlogProps { }
function Blog({ }: BlogProps): JSX.Element {
    return (
        <div className="m-10">
            <h1 className="font-sans font-extrabold text-lg2 text-orange-600 text-center">GIẢI TRÍ LÀNH MẠNH, KÍCH THÍCH SỰ SÁNG TẠO</h1>
            <div className="flex flex-row justify-between gap-14 items-center p-6">
                <div className="border rounded-lg shadow-xl p-4 basis-1/2 font-sans font-normal text-lg3 mr-20">
                    <p className="p-4">Khám phá và kích thích tò mò của trẻ với những bài viết giáo dục đầy sinh động tại KidTalkie!</p>
                    <p className="p-4">Chúng tôi tự hào giới thiệu một thế giới tri thức mới, nơi mà học không chỉ là một nhiệm vụ, mà còn là một cuộc phiêu lưu thú vị. Các bài viết được chọn lọc không chỉ mang lại kiến thức sâu sắc mà còn đánh thức tò mò, khám phá và sự sáng tạo ẩn sau mỗi chủ đề.</p>
                </div>
                <img className="basis-1/2 h-675" src={blog} alt="" />
            </div>
        </div>
    );
}
export default Blog;