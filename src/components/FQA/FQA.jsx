import questionImage from "./assets/questionImage.png"
import grayStar from "./assets/gray_star.png";
import star from "./assets/star.png"
import bigStar from "./assets/bigStar.png"
import smallStar from "./assets/smallStar.png"
import questionMark from "./assets/questionMark.png"
import MyAccordion from "../accordion/Accordion";
import AnimateComponent from "../animation/AnimateComponent"


export default function FQA() {

    return (
        <AnimateComponent 
        className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 lg:px-0 pb-[150px] pt-[100px] overflow-x-hidden flex flex-col justify-center items-center">

            <div className="flex flex-col lg:flex-row-reverse items-center lg:w-[90%] mx-auto columns is-desktop lg:justify-between is-vcentered is-centered relative is-flex-direction-column-reverse">
                <div className="relative z-30 column">
                    <img src={questionImage} alt="" className="flex-shrink-0 w-full" />

                    <img src={questionMark} alt="Question Mark" className="absolute top-0 left-[15%] w-6" />

                    <img src={questionMark} alt="Question Mark" className="absolute -top-9 left-[32%] w-9" />

                    <img src={questionMark} alt="Question Mark" className="absolute top-0 left-[50%] w-6" />

                    <img src={grayStar} alt="Star" className="w-4 absolute left-0 top-[50%] animate-pulse z-30 block" />

                    <img src={star} alt="Star" className="absolute w-4 top-[80%] bottom-0 animate-pulse left-[95%]" />

                    <img src={smallStar} alt=" Star" className="absolute w-4 -top-12 left-[44%] animate-pulse" />

                    <img src={smallStar} alt=" Star" className="absolute w-4 top-24 left-[5%] animate-pulse" />
                </div>

                <div className="circle absolute -top-[10%] -left-[30%] lg:left-[10%] lg:top-0"></div>

                <div className="circle absolute top-[50%] left-[50%] lg:right-0 lg:top-[70%]"></div>

                <div className="relative mt-2 lg:mt-0 z-30 column">
                    <img src={bigStar} alt="Star" className="w-4 animate-pulse absolute -top-16 left-[10%]" />

                    <h2 className="font-[700] text-[2.25rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3rem] text-center lg:text-start">Frequently Ask</h2>

                    <h2 className="font-[700] text-[2.25rem] sm:text-[2.5rem] leading-[2.5rem] text-center lg:text-start sm:leading-[3rem] text-[#D434FE] pb-6">Question</h2>

                    <p className="max-w-[90%] sm:max-w-[80%] xl:max-w-[70%] mx-auto lg:mx-0 text-[1.05rem] leading-[1.7rem] text-center lg:text-start">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>

                    <MyAccordion />
                </div>
            </div>
        </AnimateComponent>
    )
}
