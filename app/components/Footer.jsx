
import Image from "next/image";
import { assets } from "@/assets/assets";
import { IoLogoFacebook } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
    return (
        <div className="mt-20">
            <div className="text-center"><Image src={isDarkMode ? assets.realHtutG : assets.realHtutG2} alt="logo" className="w-36 mx-auto mb-2" />
                <div className="w-max flex items-center gap-2 mx-auto"><Image src={isDarkMode ? assets.mail_icon: assets.mail_icon2} alt="mail icon" />
                    htutkhoungsoe@gmail.com</div>
            </div >
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>@2026 Htut Khoung Soe.All rights reserved.</p><ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><FaGithub className="ml-4 large-icon" /><a target="_blank" href="https://github.com/koreanjesus123/koreanjesus123">GitHub</a></li>
                    <li><IoLogoFacebook  className="ml-6 large-icon " /><a target="_blank" href="https://github.com/koreanjesus123/koreanjesus123">Facebook</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;
