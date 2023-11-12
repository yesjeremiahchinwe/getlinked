import RegisterForm from "../../components/registerForm/RegisterForm";
import graphicDesigner from "./assets/graphic-designer.png"
import firstPerson from "./assets/first_person.png"
import secondPerson from "./assets/second_person.png"
import dottedLine from "./assets/dotted_line.png"
import Checkbox from '@mui/material/Checkbox';
import smallStar from "./assets/smallStar.png"
import star from "./assets/star.png"
import gray_star from "./assets/gray_star.png"
import { FormControlLabel } from "@mui/material";
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { store } from '../../firebase/firebase';
import Modal from "../../components/modal/Modal";
import successMan from "./assets/successful-man.png"
import successDone from "./assets/successfully-done.png"
import { Link } from "react-router-dom"
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";
import * as confetti from 'confettis'

const initState = {
    team: "",
    phone: "",
    email: "",
    project: "",
}


export default function Register() {
    const [values, setValues] = useState(initState)
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(null)
    const { show, setShow } = useContext(ModalContext)


    const handelRegister = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const { team, phone, email, project, category, size, terms_agreement } = formJson
            let userData = {
                team,
                phone,
                email,
                project,
                category,
                size,
                terms_agreement
            }

            await addDoc(collection(store, "users"), userData);
            setValues(initState)
            setIsLoading(false)
            confetti.create()
            setShow(true)
        } catch (err) {
            setErr(err.message)
        }
    }

    return (
        <section className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 lg:px-0 py-[100px] lg:py-[150px] overflow-x-hidden flex justify-center items-center lg:mt-12">

            <div className="flex flex-col lg:flex-row items-center justify-center lg:w-[90%] mx-auto relative">
                <div className="circle absolute left-0 top-[10%]"></div>
                <img src={graphicDesigner} alt="Graphic Designer on a sit" className="lg:w-[50%]" />

                <img src={smallStar} alt="Purple Star" className="absolute top-[10%] left-[10%] w-4 animate-pulse" />

                <img src={gray_star} alt="Gray Star" className="absolute top-[20%] lg:top-[60%] left-[90%] lg:left-[5%] w-4 animate-pulse" />

                <img src={smallStar} alt="Purple Star" className="absolute top-[27%] left-[40%] w-4 animate-pulse" />

                <div className="relative z-20 bg-[rgb(0,0,0,0.25)] w-full p-8 lg:p-14">
                    <h2 className="font-[600] text-[1.35rem] sm:text-[1.5rem] leading-[1.5rem] text-center lg:text-start sm:leading-[1.75rem] text-[#D434FE] pb-2">Register</h2>

                    <div className="flex items-baseline gap-x-4 justify-center lg:justify-start py-4">
                        <p className="font-[400] text-[0.88rem] leading-[17px]">Be part of this movement!</p>

                        <div className="flex flex-col items-center">
                            <div className="flex items-center">
                                <img src={firstPerson} alt="A person walking" />
                                <img src={secondPerson} alt="A person walking" />
                            </div>
                            <img src={dottedLine} alt="A dotted line" />
                        </div>
                    </div>
                    <h2 className="font-[400] text-[1.55rem] leading-[1.75rem] text-center lg:text-start sm:leading-[1.75rem] pb-6">CREATE YOUR ACCOUNT</h2>

                    {err && <p>{err}</p>}

                    {show &&
                        <Modal show={show}>
                            <div className="p-8 relative">
                                <div className="flex items-center justify-center w-full mx-auto">
                                    <img src={successDone} alt="Green Completed Checkmark" className="w-[40%] block -ml-[9rem]" />
                                    <img src={successMan} alt="A man dancing" className="w-[50%] absolute right-[10%]" />
                                </div>

                                <h2 className="text-[2rem] text-center pb-4 pt-8 leading-[39px] font-[600]">Congratulations you have successfully Registered!</h2>
                                <p className="font-[600] text-center text-[0.88rem] leading-[24px]">Yes, it was easy and you did it!</p>
                                <p className="font-[600] text-center text-[0.88rem] leading-[24px]">check your mail box for next step</p>

                                <Link
                                    to="/"
                                    className="bg-[#903AFF] bg-gradient-to-r to-[#903AFF] from-[#FE34B9] text-center w-full mt-8 py-3 px-10 rounded-md block mx-auto z-20 relative hover:text-white"
                                    onClick={() => setShow(false)}
                                >Back
                                </Link>
                            </div>
                        </Modal>
                    }

                    <form onSubmit={handelRegister} className="relative z-20">
                        <RegisterForm values={values} setValues={setValues} />

                        <p className="text-[0.75rem] leading-[14.6px] italic font-[400] text-[#FF26B9]">Please review your registration details before submitting</p>

                        <div className="my-4 z-20">
                            <FormControlLabel
                                sx={{ '& .MuiTypography-root': { fontSize: "0.75rem", } }}

                                control={<Checkbox name="terms_agreement" required aria-label="Terms and Conditions agreement" sx={{ '& .MuiSvgIcon-root': { fontSize: 20, color: "#FFFFFF" } }} />}

                                label="I agreed with the event terms and conditions  and privacy policy" />
                        </div>

                        <button
                            disabled={isLoading}
                            className="bg-[#903AFF] bg-gradient-to-r to-[#903AFF] from-[#FE34B9] w-full mt-8 py-3 px-10 rounded-md block mx-auto z-20 relative"
                        >{isLoading ?
                            <div className="flex items-center justify-center gap-x-3">
                                <div className="w-6 h-6 block border-[4px] border-solid border-[#ccc] border-t-[rgb(51,51,51,0.7)] rounded-full animate-spin"></div>Registering...
                            </div> :
                            "Register Now"}
                        </button>
                    </form>
                    <div className="circle absolute -right-[10%] z-1 top-[70%]"></div>
                    <img src={star} alt="Purple Star" className="absolute top-[100%] right-[5%] w-4 animate-pulse" />
                </div>

            </div>
        </section >
    )
}
