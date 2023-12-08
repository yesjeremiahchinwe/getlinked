import { Link, useLocation } from "react-router-dom";
import homeIcon from "./assets/getlinked.png"
import menuIcon from "./assets/menuIcon.png"
import closeMenu from "./assets/closeMenu.png"
import { useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation().pathname
  const { show } = useContext(ModalContext)


  return (
    <header className={`bg-[rgb(21,14,40,1)] lg:bg-[rgb(21,14,40,0.7)] lg:backdrop-blur-[15px] overflow-x-hidden flex items-center justify-between text-[#F8F8F8] py-4 px-6 sm:px-10 lg:px-0 ${show ? "z-10" : "z-40"} w-full fixed top-0`}>

      <div className="w-full flex items-center lg:justify-between lg:w-[86%] max-w-[1300px] mx-auto is-vcentered is-centered">
        <Link to="/" className="">
          <img
            src={homeIcon}
            alt="Name of the Website"
            className="w-28 sm:w-36 lg:w-40"
          />
        </Link>


        {/* --------------- Desktop Navbar --------------------- */}
        <div className="hidden lg:flex items-center justify-between gap-16">
          <ul className="flex items-center gap-4 m-0 list-none">
            <li>
              <Link
                to="#"
                className="block text-[1rem] leading-[1rem] py-2 px-4 text-white/80 hover:text-white">Timeline</Link>
            </li>

            <li>
              <Link
                to="#"
                className="block text-[1rem] leading-[1rem] py-2 px-4 text-white/80 hover:text-white">Overview</Link>
            </li>

            <li>
              <Link
                to="#"
                className="block text-[1rem] leading-[1rem] py-2 px-4 text-white/80 hover:text-white">FAQs</Link>
            </li>

            <li>
              <Link to="/contact"
                className={`block text-[1rem] leading-[1rem] py-2 px-4 text-white/80 hover:text-white ${location === "/contact" ? "bg-clip-text text-transparent bg-gradient-to-r from-[rgb(144,58,255)] to-[#FE34B9] hover:text-transparent" : ""}`}>Contact</Link>
            </li>

            <li>
              <Link to="/register" className={`block ml-4 text-[1rem] leading-[1rem]  py-4 px-10 rounded-md hover:text-[#FFFFFF] bg-gradient-to-r to-[#903AFF] from-[#FE34B9] border-2 border-[#903AFF] hover:border-[rgb(255,255,255,0.8)]
              ${location === "/register" ? "border-2 border-[#FFFFFF] to-transparent from-transparent" : ""}`}>Register</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="lg:hidden w-6 sm:w-8"
        />
      </div>

      {/* -------- Mobile Navbar ---------------- */}
      <div className={`bg-[#150E28] text-[#F8F8F8] flex lg:hidden flex-col items-start gap-8 w-full z-20 h-screen fixed top-0 overflow-x-hidden transition-[right] duration-500 py-4 px-8 ${isOpen ? "right-0" : "-right-[100%]"}`}>

        <div className="p-3 cursor-pointer ml-auto" onClick={() => setIsOpen(!isOpen)}>
          <img src={closeMenu} alt="Close Menu" className="w-4" />
        </div>

        <ul className="flex flex-col items-start py-8 gap-4 m-0 list-none">
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link
              to="#"
              className="block text-[1rem] leading-[1rem] p-2 hover:opacity-80 font-[600] text-white/80 hover:text-white">Timeline</Link>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <Link
              to="#"
              className="block text-[1rem] leading-[1rem] p-2 hover:opacity-80 font-[600] text-white/80 hover:text-white">Overview</Link>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <Link
              to="#"
              className="block text-[1rem] leading-[1rem] p-2 hover:opacity-80 font-[600] text-white/80 hover:text-white">FAQs</Link>
          </li>

          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/contact"
              className={`block text-[1rem] leading-[1rem] p-2 hover:opacity-80 font-[600] text-white/80 hover:text-white ${location === "/contact" ? "bg-clip-text text-transparent bg-gradient-to-r from-[#8e38ff] to-[#FE34B9] hover:text-transparent" : ""}`}>Contact</Link>
          </li>
        </ul>

        <Link
          to="/register"
          className="hover:text-white block bg-[#903AFF] bg-gradient-to-r to-[#903AFF] from-[#FE34B9] py-3 hover:scale-[1.05] -mt-8 px-10 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >Register</Link>
      </div>
    </header>
  )
}
