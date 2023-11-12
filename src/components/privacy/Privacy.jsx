import manOnPalock from "./assets/man_on_palock.png"
import palock from "./assets/palock.png"
import checkmark from "./assets/checkmark.png";
import { Link } from "react-router-dom";
import smallStar from "./assets/smallStar.png"
import star from "./assets/star.png"
import gray_star from "./assets/gray_star.png"



export default function Privacy() {
    return (
        <section className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 py-[100px] lg:px-0 lg:py-[150px] overflow-x-hidden flex flex-col justify-center items-center">

            <div className="flex flex-col-reverse gap-20 lg:flex-row-reverse justify-center items-center lg:justify-between lg:w-[90%] mx-auto relative">

                <div className="mb-4 w-full relative flex flex-col">
                    <img
                        src={star}
                        alt="White Star"
                        className="absolute w-4 top-[18%] left-[70%] animate-pulse"
                    />
                    <img
                        src={star}
                        alt="White Star"
                        className="absolute w-4 top-[75%] left-[20%] animate-pulse"
                    />
                    <img
                        src={smallStar}
                        alt="White Star"
                        className="w-4 absolute top-[65%] left-[30%] animate-pulse"
                    />
                    <img
                        src={gray_star}
                        alt="Gray Star"
                        className="absolute top-[90%] left-[95%] w-4 animate-pulse"
                    />
                    <img
                        src={palock}
                        alt="Paclock"
                        className="mx-auto relative top-0 w-[80%] sm:w-[60%] lg:w-[80%]"
                    />
                    <img
                        src={manOnPalock}
                        alt="A man standing on a big patlock key"
                        className="mx-auto -mt-[300px] lg:-mt-[400px] w-[80%] sm:w-[60%] lg:w-[80%]"
                    />
                </div>

                <img
                    src={smallStar}
                    alt="White Star"
                    className="w-4 absolute top-[5%] animate-pulse lg:top-[10%] left-[90%] lg:left-[40%]"
                />
                <img
                    src={gray_star}
                    alt="Gray Star"
                    className="absolute -top-[2%] left-[30%] w-4 animate-pulse"
                />

                <div className="relative lg:w-[80%]">
                    <h2 className="font-[700] text-[1.85rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3rem] text-center lg:text-start sm:mt-12 lg:mt-0">Privacy Policy and</h2>

                    <h2 className="font-[700] text-[2rem] sm:text-[2.5rem] leading-[2.5rem] text-center lg:text-start sm:leading-[3rem] text-[#D434FE] pb-6">Terms</h2>

                    <p className="sm:max-w-[80%] text-[0.88rem] text-[rgb(255,255,255,0.75)] leading-[1.7rem] text-center lg:text-start max-w-[90%] mx-auto mb-4 lg:mx-0">Last updated on September 12, 2023</p>

                    <p className="sm:max-w-[80%] font-[400] text-[0.88rem] leading-[1.7rem] text-center lg:text-start max-w-[90%] text-[#FFFFFF] mx-auto lg:mx-0 py-4">Below are our privacy & policy, which outline a lot of goodies. it&apos;s our aim to always take of our participant</p>

                    <div className="circle absolute top-[80%] -left-[10%] lg:-left-[10%]"></div>

                    <div className="my-8 p-14 border-2 border-[rgb(212,52,254,0.6)] bg-[rgb(0,0,0,0.25)] rounded-sm relative">
                        <p className="leading-8 text-[0.88rem] text-center lg:text-start font-[400]">At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

                        <h2 className="font-[700] text-[1rem] leading-[2rem] text-start text-[#D434FE] pt-8">Licensing Policy</h2>

                        <p className="font-[700] text-[0.88rem] leading-8">Here are terms of our Standard License:</p>

                        <div className="flex items-start py-4 gap-x-4">
                            <img src={checkmark} alt="Checkmark" className="mt-2" />
                            <p className="font-[400] text-[0.88rem] leading-[30px]">The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                        </div>

                        <div className="flex items-start py-2 gap-x-4">
                            <img src={checkmark} alt="Checkmark" className="mt-2" />
                            <p className="font-[400] text-[0.88rem] leading-[30px]">You are licensed to use the item available at any free source sites, for your project developement</p>
                        </div>

                        <button className="bg-[#903AFF] hover:scale-[1.05] bg-gradient-to-r to-[#903AFF] from-[#FE34B9] mt-8 py-3 px-10 rounded-md block mx-auto">
                            <Link to="#" className="hover:text-white">Read More</Link>
                        </button>
                    </div>


                </div>
            </div>
        </section>
    )
}
