import { Link } from "react-router-dom"
import getlinked from "./assets/getlinked.png"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { BiLogoLinkedin, BiSolidPhoneCall } from "react-icons/bi"
import { RiTwitterXLine } from "react-icons/ri"
import { ImLocation2 } from "react-icons/im"
import smallStar from "./assets/smallStar.png"
import star from "./assets/star.png"
import gray_star from "./assets/gray_star.png"


export default function Footer() {
  const date = new Date().getFullYear()

  return (
    <footer className="bg-[#100B20] text-[rgb(255,255,255,0.8)] py-16 px-4 pb-4 lg:px-0">
      <article className="columns w-[85%] mx-auto pb-8 relative">
        <div className="flex flex-col basis-[40%] items-start gap-y-14 column">
          <div>
            <a href="/">
              <img
                src={getlinked}
                alt="Company's logo"
                className="w-[100px] lg:w-[150px]"
              />
            </a>
            <p className="pt-4 font-[400] text-[0.75rem] sm:w-[60%] leading-[20px]">Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
          </div>

          <small className="font-[400] text-[0.75rem] leading-[20px]"><span className="pr-3">Terms of Use</span> <span className="border-l-2 border-[#D434FE] pl-3">Privacy Policy</span></small>
        </div>

        <img src={star} alt="White Star" className="absolute w-4 animate-pulse top-8 -left-8" />

        <img src={smallStar} alt="White Star" className="absolute w-4 animate-pulse top-[90%] lg:left-[40%] left-[60%]" />

        <img src={gray_star} alt="White Star" className="absolute w-4 animate-pulse -top-4 lg:top-[20%] left-[80%]" />

        <img src={star} alt="White Star" className="absolute w-4 animate-pulse top-[100%] -right-4" />



        <div className="flex flex-col basis-[30%] items-start column">
          <h4 className="text-[#D434FE] font-[600] text-[0.88rem] leading-[24px] pb-2 sm:pb-4">Useful Links</h4>
          <ul className="flex flex-col items-start gap-y-2 sm:gap-y-4">
            <li className="text-[0.75rem] leading-[20px] font-[400]">
              <Link className="text-white/80 hover:text-white" to="#">Overview</Link>
            </li>
            <li className="text-[0.75rem] leading-[20px] font-[400]">
              <Link className="text-white/80 hover:text-white" to="#">Timeline</Link>
            </li>
            <li className="text-[0.75rem] leading-[20px] font-[400]">
              <Link className="text-white/80 hover:text-white" to="#">FAQs</Link>
            </li>
            <li className="text-[0.75rem] leading-[20px] font-[400]">
              <a className="text-white/80 hover:text-white" href="/register">Register</a>
            </li>
            <li className="text-[0.75rem] leading-[20px] font-[400]">
              <div className="flex gap-4 items-center">
                <span className="text-[#D434FE]">Follow us</span>
                <Link to="#" className="text-white/80 hover:text-white"><BsInstagram /></Link>
                <Link to="#" className="text-white/80 hover:text-white"><RiTwitterXLine /></Link>
                <Link to="#" className="text-white/80 hover:text-white"><FaFacebookF /></Link>
                <Link to="#" className="text-white/80 hover:text-white"><BiLogoLinkedin /></Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start column">
          <h4 className="text-[#D434FE] font-[600] text-[0.88rem] leading-[24px] pb-2 sm:pb-4">Contact us</h4>
          <ul className="flex flex-col gap-y-4 items-start">
            <li>
              <div className="flex gap-2 items-start">
                <BiSolidPhoneCall />
                <Link to="tel:+234 6707653444" className="font-[400] text-[0.65rem] leading-[14px] hover:text-white w-full">+234 6707653444</Link>
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-start">
                <ImLocation2 />
                <address className="font-[400] text-[0.85rem] leading-[18px]">
                  27,Alara Street <br />
                  Yaba 100012 <br />
                  Lagos State
                </address>
              </div>
            </li>
          </ul>
        </div>
      </article>

      <div className="mt-10 flex flex-col">
        <small className="text-center mx-auto w-full font-[400] text-[0.75rem] leading-[14.6px]">All rights reserved. © {date} getlinked Ltd.</small>
        <small className="text-center mx-auto pt-2 w-full font-[400] text-[0.75rem] leading-[14.6px]">Developed by Jeremiah C.</small>
      </div>
    </footer>
  )
}
