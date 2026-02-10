import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const Contact = ({isDarkMode}) => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "445455ac-73b4-4256-8678-59fa506a8dc9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-cover">
            <motion.h4 initial={{opacity:0,y:-20}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.3}} className="text-center mb-2 text-lg font-montserrat">Conncet with me</motion.h4>
            <motion.h2 initial={{opacity:0,y:-20}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className="text-center text-5xl font-montserrat">Get in touch</motion.h2>
            <motion.p initial={{opacity:0,y:-20}} whileInView={{y:0,opacity:1}} transition={{duration:0.7,delay:0.7}} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-montserrat">
                I&apos;m always open to discussing new opportunities and potential collaborations.If you&apos;d like to get in touch, please feel free to reach out through any of the platforms below.
            </motion.p>
            <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.9}} onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <motion.input initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:1.0}} type="text" placeholder="Enter your name" required
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:text-black" name="name"></motion.input>
                    <motion.input initial={{x:50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:1.1}} type="text" placeholder="Enter your email" required
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:text-black" name="email"></motion.input>
                </div>
                <motion.textarea initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:1.2}} rows='6' placeholder="Your message here..." required className="w-full p-4 outline-none border-[0.5]
                border-gray-400 rounded-md bg-white mb-6 dark:text-black" name="message" ></motion.textarea>
                <motion.button initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:1.3}} type='submit' className="py-3 px-8 w-max flex items-center justify-between
                gap-2 bg-blue-400 rounded-full mx-auto hover:bg-gradiant transition-transform duration-300 ease-in-out hover:translate-x-3 text-black dark:text-white dark:bg-purple-400">Submit now
                    <Image src={isDarkMode ? assets.right_arrow_white : assets.dark_right_arrow} alt="arrow" className="w-4" /></motion.button>
                <p  className="mt-4">{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact;
