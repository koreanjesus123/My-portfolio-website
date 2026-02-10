'use client';

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-12/12 -z-10 translate-y-[-80%]">
                <Image
                    src={assets.header_bg_color}
                    alt="header background"
                    className="w-full"
                />
            </div>

            <nav className={`w-full fixed px-3 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? " bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    <Image
                        src={isDarkMode ? assets.realHtutG :assets.realHtutG2}
                        alt="HtutG"
                        className="w-28 cursor-pointer mr-25"
                    />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " shadow-sm bg-opacity-50"} `}>
                    <li className="font-montserrat hover:text-sky-800 dark:hover:text-purple-800">
                        <a href="#header">Home</a>
                    </li>
                    <li className="font-montserrat hover:text-sky-800 dark:hover:text-purple-800">
                        <a href="#about">About me</a>
                    </li>
                    <li className="font-montserrat hover:text-sky-800 dark:hover:text-purple-800">
                        <a href="#services">Services</a>
                    </li>
                    <li className="font-montserrat hover:text-sky-800 dark:hover:text-purple-800">
                        <a href="#work" >My Work</a>
                    </li>
                    <li className="font-montserrat hover:text-sky-800 dark:hover:text-purple-800">
                        <a href="#contact">Contact me</a>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image
                            src={isDarkMode ? assets.moon_icon : assets.sun_icon}
                            alt="darkmode_icon"
                            className="w-7"
                        />
                    </button>
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 shadow-sm
bg-opacity-50 rounded-full ml-4 font-montserrat bg-sky-300 hover:bg-gradiant transition-transform
duration-300 ease-in-out hover:translate-x-2 hover:-translate-y-2 dark:bg-purple-300"
                    >
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow" className="w-3" />
                    </a>
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image
                            src={isDarkMode ? assets.menu_white : assets.menu_black}
                            alt="menu_icon"
                            className="w-6"
                        />
                    </button>
                </div>
                {/* mobile menu */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50
h-screen bg-gradiant transition duration-500"
                    onClick={closeMenu}
                >
                    <button className="absolute top-6 right-6" onClick={closeMenu}>
                        <Image
                            src={isDarkMode ? assets.close_white : assets.close_black}
                            alt="close_icon"
                            className="w-5 cursor-pointer"
                        />
                    </button>
                    <li className="font-montserrat" onClick={closeMenu}>
                        <a href="#header">Home</a>
                    </li>
                    <li className="font-montserrat" onClick={closeMenu}>
                        <a href="#about">About me</a>
                    </li>
                    <li className="font-montserrat" onClick={closeMenu}>
                        <a href="#services">Services</a>
                    </li>
                    <li className="font-montserrat" onClick={closeMenu}>
                        <a href="#work">My Work</a>
                    </li>
                    <li className="font-montserrat" onClick={closeMenu}>
                        <a href="#contact">Contact me</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
