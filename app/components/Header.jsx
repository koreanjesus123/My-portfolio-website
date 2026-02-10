import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react"


const Header = ({ isDarkMode }) => {
    return (
        <div id="header" className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.8,type:'spring',stiffness:100}}>
                <Image src={assets.HtutG_profile} alt="" className="rounded-full w-32 mr-5" />
            </motion.div>
            <motion.h3 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:0.3}} className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-montserrat">Hi! I&apos;m Htut Khoung soe
<Image src={assets.hand_icon} alt="" className="rounded-full w-6" /></motion.h3>
            <motion.h1 initial={{y:-30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8,delay:0.5}} className="text-3xl sm:text-6xl lg:text-[66px] font-montserrat">
                web developer based in yangon.
            </motion.h1>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,delay:0.7}} className="max-w-2xl mx-auto font-montserrat">
                I am a frontend web developer from yangon with two years of experience in nextjs,typescrpit and laravel.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1.2}} href="#contact" className="hover:bg-gradiant hover:translate-x-2 duration-500 px-4 py-3  rounded-full bg-darkTheme text-white  flex items-center gap-2 border border-white dark:text-black
dark:bg-white">contact me<Image src={isDarkMode ? assets.dark_right_arrow : assets.right_arrow_white} alt="" className="w-4" /></motion.a>
                <motion.a initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1.2}} href="/Htut Khoung Soe cv(resume).pdf" download={true} className="hover:bg-gradiant hover:translate-y-2 duration-500 border border-black text-black px-4 py-3 rounded-full border-gray-500 flex items-center gap-2 dark:text-white">my resume<Image src={assets.download_icon} alt="" className="w-4" /></motion.a>
            </div>
        </div>)
}
export default Header;
