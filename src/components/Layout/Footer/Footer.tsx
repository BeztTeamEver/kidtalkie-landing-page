import Logo from "../../../assets/logoWhite.svg";
import { IconBrandFacebook, IconBrandYoutube, IconBrandLinkedin, IconMailOpened } from '@tabler/icons-react';
interface LinkItem {
    title: string;
    items: { label: string; href: string }[];
}

const Links: LinkItem[] = [
    {
        title: "Menu",
        items: [
            { label: "Trang chủ", href: "/home" },
            { label: "Blog", href: "/blog" },
            { label: "Về KidTalkie", href: "/about" },
            { label: "Tuyển dụng", href: "/#" }
        ],
    },
    {
        title: "Điều Khoản",
        items: [
            { label: "Chính sách bảo mật", href: "/privacy" },
            { label: "Điều khoản dịch vụ", href: "/terms" },
        ],
    },
];

const currentYear: number = new Date().getFullYear();

interface FooterProps { }

function Footer({ }: FooterProps): JSX.Element {
    return (
        <footer className="bg-orange-700 font-sans dark:bg-gray-900">
            <div className="container px-6 pt-12 mx-auto max-w-full">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
                    <div className="sm:col-span-2">
                        <div className="flex items-center">
                            <img
                                className="h-8 w-auto"
                                src={Logo}
                                alt=""
                            />
                            <h1 className="max-w-lg text-lg1 font-extrabold tracking-tight text-white xl:text-2xl ml-2">
                                KidTalkie
                            </h1>
                        </div>
                        <div className="flex flex-col mx-auto mt-6 space-y-3 ">
                            <p className="font-sans font-semibold text-white md:size-auto">KidTalkie không chỉ là một ứng dụng liên lạc dành cho trẻ, mà còn là một nền tảng học tập sáng tạo, vui nhộn và an toàn. Hãy cùng chúng tôi đưa trải nghiệm giáo dục của con bạn lên một tầm cao mới!</p>
                            <div className="flex flex-row">
                                <p className="font-sans font-medium text-primary-50" >Theo dõi chúng tôi tại:</p>
                                <a href="https://www.facebook.com/kidtalkie" target="_blank" className="ml-2"><IconBrandFacebook className="text-white" /></a>
                                <a href="#" className="ml-2"><IconBrandLinkedin className="text-white" /></a>
                                <a href="#" className="ml-2"><IconBrandYoutube className="text-white" /></a>
                            </div>
                        </div>
                    </div>
                    {Links.map(({ title, items }) => (
                        <div key={title}>
                            <p className="font-extrabold text-white dark:text-white text-lg6">{title}</p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                {items.map(({ label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="text-white font-semibold text-lg7 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-blue-500"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div>
                        <p className="font-extrabold text-white dark:text-white text-lg6">Liên hệ với KidTalkie</p>
                        <a href="mailto:someone@example.com" className="flex items-center mt-5 font-semibold text-lg7">
                            <IconMailOpened className="w-3.5 text-white" />
                            <p className="font-sans text-white ml-1">kidtalkie@gmail.com</p>
                        </a>
                    </div>
                </div>

                <hr className="mt-4 border-white dark:border-gray-700" />

                <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 font-bold text-white text-sm">
                    © KidTalkie {currentYear} - version 1.0
                </p>
            </div>
        </footer>
    );
}

export default Footer;
