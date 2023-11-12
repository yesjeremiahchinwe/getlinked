import { BiLogoLinkedin } from "react-icons/bi"
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contactForm/ContactForm";
import smallStar from "./assets/smallStar.png"
import star from "./assets/star.png"
import gray_star from "./assets/gray_star.png"


export default function Contact() {

    return (
        <section className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 lg:px-0 py-[100px] lg:py-[150px] overflow-x-hidden flex justify-center items-center mt-16 lg:mt-20">

            <div className="columns is-desktop lg:w-[85%] mx-auto is-vcentered is-centered lg:flex-row-reverse relative is-desktop">

                <div className="column relative z-30 bg-[rgb(0,0,0,0.25)] p-10 lg:p-20">
                    <h2 className="font-[600] text-[1.35rem] sm:text-[1.5rem] leading-[1.5rem] text-center lg:text-start sm:leading-[1.75rem] text-[#D434FE] pb-2">Questions or need assistance?</h2>
                    <h2 className="font-[600] text-[1.35rem] sm:text-[1.5rem] leading-[1.5rem] text-center lg:text-start sm:leading-[1.75rem] text-[#D434FE] pb-6">Let us know  about it!</h2>

                    <form>
                        <ContactForm />
                        <button
                            className="bg-[#903AFF] bg-gradient-to-r to-[#903AFF] from-[#FE34B9] mt-8 py-3 px-10 rounded-md block mx-auto"
                        >Submit</button>
                    </form>
                </div>

                <img
                    src={gray_star}
                    alt="Purple Star"
                    className="absolute -top-[5%] lg:-top-[10%] right-8 w-5 animate-pulse"
                />

                <img
                    src={star}
                    alt="Purple Star"
                    className="absolute top-[50%] lg:top-[90%] right-8 lg:-right-14 w-5 animate-pulse"
                />

                <div className="circle absolute right-0 top-[0%] lg:top-[60%]"></div>

                <div className="circle absolute -left-16 top-[50%] lg:top-0"></div>

                <div className="relative z-30 column">
                    <h2 className="font-[700] text-[2.25rem] sm:text-[2.5rem] leading-[2.5rem] text-center lg:text-start sm:leading-[3rem] text-[#D434FE] pb-6 pt-14 lg:pt-0">Get in touch</h2>

                    <img
                        src={smallStar}
                        alt="Purple Star"
                        className="absolute top-8 lg:-top-[20%] lg:left-[10%] w-5 animate-pulse"
                    />

                    <article className="flex flex-col gap-8 items-start">
                        <p className="font-[400] leading-[19px]">Contact Information</p>

                        <address className="font-[400] text-[1rem] not-italic leading-[19px]">
                            27,Alara Street <br />
                            Yaba 100012 <br />
                            Lagos State
                        </address>

                        <p className="font-[400] leading-[19px]">Call Us: 07067981819</p>

                        <p className="font-[400] leading-[19px]">we are open from Monday-Friday 08:00am - 05:00pm</p>

                        <div className="flex flex-col gap-4 items-start">
                            <span className="text-[#D434FE] text-[1rem] leading-[19px]">Share on</span>
                            <div className="flex items-center gap-4">
                                <Link
                                    to="#"
                                    className="text-white/80 hover:text-white"
                                >
                                    <BsInstagram />
                                </Link>
                                <Link
                                    to="#"
                                    className="text-white/80 hover:text-white"
                                >
                                    <RiTwitterXLine />
                                </Link>
                                <Link
                                    to="#"
                                    className="text-white/80 hover:text-white"
                                >
                                    <FaFacebookF />
                                </Link>
                                <Link
                                    to="#"
                                    className="text-white/80 hover:text-white"
                                >
                                    <BiLogoLinkedin />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section >
    )
}
