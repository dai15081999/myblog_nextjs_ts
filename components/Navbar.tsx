import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex item-center justify-between py-6">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image src="/logo.png" height={35} width={40} />
                    <span className="font-bold ml-2 text-primary">
                        Đại Blog
                    </span>
                </div>
            </Link>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Sản phẩm</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Bài Viết</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Liên hệ</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Company</a>
                </li>
            </ul>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#" className="hover:text-gray-400">
                        Đăng nhập
                    </a>
                </li>
                <li className="font-medium text-gray-600">
                    <a
                        href="#"
                        className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">
                        Đăng ký
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
