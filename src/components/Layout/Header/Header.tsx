import React, { useState } from 'react';
import { IconSparkles, IconX, IconMenu2 } from '@tabler/icons-react';
import Logo from '../../../assets/logoBasic.svg';
import { Link } from 'react-router-dom';
const navigation = [
  { name: 'Trang Chủ', href: '/' },
  { name: 'Blog', href: '/updating' },
  { name: 'Về KidTalkie', href: '/updating' },
  { name: 'Chi phí', href: '/cost' },
];

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-white" style={{ background: 'transparent' }}>
      <nav
        // className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1 items-center lg:justify-start">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <img className="h-8 w-auto" src={Logo} alt="" />
            <span className="ml-2 text-primary-500 font-sans font-extrabold text-lg1">
              KidTalkie
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          {navigation.map((item, index) => (
            <Link to={item.href}
              // href={item.href}
              key={index}
              className="flex-auto text-lg1 font-semibold text-center hover:text-gray-500">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <IconMenu2 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/incentives"
            className="flex items-center bg-orange-500 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-full font-sans text-sm">
            <IconSparkles className="size-6" />
            <span className="ml-2">Đăng ký trước ngay</span>
            <IconSparkles className="size-6 ml-2" />
          </Link>
        </div>
      </nav>
      <div className={`fixed inset-0 z-10 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-md sm:ring-1 sm:ring-gray-900/10 overflow-hidden">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <img className="w-auto" src={Logo} alt="" />
              <span className="ml-2 text-primary-500 font-sans font-extrabold text-lg1">
                KidTalkie
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <IconX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                {item.name}
              </a>
            ))}
            <div className="py-6">
              <Link to="/incentives" className="flex items-center justify-center bg-orange-500 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-full font-sans leading-3">
                <IconSparkles className="size-6" />
                <span className="ml-2">Đăng ký trước ngay</span>
                <IconSparkles className="size-6 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
