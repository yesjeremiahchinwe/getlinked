import manVisioning from "./assets/man-visioning.png"
import star from "./assets/star.png"
import grayStar from "./assets/gray_star.png"
import underline from "./assets/underline.png"
import metrix from "./assets/metrix.png"
import chain from "./assets/icon_chain.png"
import sun from "./assets/sun.png"
import visioningCircle from "./assets/visioning_circle.png";
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


/* eslint-disable */
export default function Hero({ heroVariants }) {


    return (
        <section className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 py-8 lg:px-0 relative mt-16 lg:mt-20">

            <motion.div
                variants={heroVariants}
                initial="initial"
                animate="final"
                exit={{ opacity: 0 }}
                className="flex flex-col items-end mb-12 sm:mt-4 gap-1 lg:pr-8">
                <p className="text-[1rem] self-end sm:text-[1.5rem] leading-[1.65rem] font-[700] italic">Igniting a Revolution in HR Innovation</p>
                <img src={underline} alt="Underline" className="w-[180px] block ml-auto" />
            </motion.div>

            <img src={star} alt="Star" className="absolute w-4 top-[5rem] left-[4rem] lg:left-[20%] animate-pulse" />

            <img src={grayStar} alt="Star" className="absolute top-[5rem] left-[70%] lg:left-[50%] w-4 animate-pulse" />

            <div className="circle absolute lg:left-[200px] top-[70px] "></div>

            <div className="columns is-desktop lg:justify-between lg:w-[90%] mx-auto is-vcentered is-centered relative">
                <div className="z-30 column">
                    <h2 className="font-[700] text-[2.25rem] sm:text-[4rem] leading-[3rem] sm:leading-[5rem] text-center lg:text-start sm:mt-12 lg:mt-0">getlinked Tech</h2>

                    <div className="flex items-center justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                        <div>
                            <h2 className="flex flex-nowrap font-[700] text-[2.25rem] sm:text-[4rem] leading-[2.5rem] sm:leading-[5rem]">Hackathon <span className="text-[#D434FE] pr-2">1.0</span></h2>
                        </div>

                        <div className="flex items-center">
                            <img src={chain} alt="Chain" className="w-[40px] lg:w-[80px]" />
                            <img src={sun} alt="Sun" className="w-[40px] lg:w-[50px]" />
                        </div>
                    </div>

                    <p className="font-[400] text-[1rem] sm:text-[1.25rem] leading-[1.65rem] sm:leading-[2rem] py-4 lg:w-[85%] text-center lg:text-start max-w-[80%] mx-auto lg:mx-0">Participate in getlinked tech Hackathon 2023 stand
                        a chance to win a Big prize</p>

                    <button className="bg-[#903AFF]  hover:scale-[1.05] bg-gradient-to-r to-[#903AFF] from-[#FE34B9] mt-4 py-3 px-10 rounded-md block mx-auto lg:mx-0">
                        <Link to="/register" className="hover:text-white">Register</Link>
                    </button>

                    <img src={grayStar} alt="Star" className="absolute lg:top-[70%] left-[70%] lg:left-[30%] w-4 animate-pulse" />

                    <div className="flex items-center justify-center lg:justify-start mt-12 gap-8">
                        <h5 className="text-[2.5rem] lg:text-[3.5rem]">00<span className="text-[0.75rem]">H</span></h5>
                        <h5 className="text-[2.5rem] lg:text-[3.5rem]">00<span className="text-[0.75rem]">M</span></h5>
                        <h5 className="text-[2.5rem] lg:text-[3.5rem]">00<span className="text-[0.75rem]">S</span></h5>
                    </div>
                </div>

                <div className="relative column">
                    <img src={manVisioning} alt="Man wearing smart glasses touching visual screen" />
                    <img src={metrix} alt="Metrix" className="absolute top-0 text-white fill-slate-100" />
                    <img src={visioningCircle} alt="Visioning" className="absolute top-0" />
                </div>
            </div>
        </section>
    )
}
