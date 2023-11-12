import grayStar from "./assets/gray_star.png";
import star from "./assets/star.png"
import bigStar from "./assets/bigStar.png"
import MyVerticalTimeline from "./verticleTimeline/VerticleTimeline";


export default function Timeline() {
    return (
        <section className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 lg:px-0 pb-[100px] pt-[100px] lg:pb-[200px] overflow-x-hidden flex flex-col justify-center items-center relative">

           <div className="lg:w-[90%] mx-auto">
                    <img src={bigStar} alt="Star" className="absolute w-4 top-[5%] left-[20%]" />

                    <img src={grayStar} alt="Star" className="w-4 absolute left-[90%] lg:left-[20%] top-[76%] lg:top-[80%] animate-pulse z-30  hidden lg:block" />

                    <img src={star} alt="Star" className="absolute w-4 animate-pulse left-14 lg:left-[90%] top-[80%] hidden lg:block lg:top-[85%]" />
                

                <h2 className="mx-auto text-center text-[2.25rem]">Timeline</h2>
                <p className="mx-auto text-[1rem] block w-[80%] lg:w-[30%] py-3 leading-6 text-center">Here is the breakdown of the time we anticipate using for the upcoming event.</p>


                <div className="lg:w-[90%] relative mt-12 lg:mt-24 z-30">
                   <MyVerticalTimeline />
                </div>
            </div>
        </section>
    )
}
