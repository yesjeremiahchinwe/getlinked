import bigIdea from "./assets/bigIdea.png"
import smallStar from "./assets/smallStar.png"
import bigStar from "./assets/bigStar.png"
import arrow from "./assets/arrow.png"


export default function BigIdea() {

    return (
        <section className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 py-[200px] lg:px-0 overflow-x-hidden flex flex-col justify-center items-center">

            <div
                className="columns is-desktop lg:justify-between lg:w-[90%] mx-auto is-vcentered is-centered">
                <div className="relative mb-4 column">
                    <img src={smallStar} alt="Star" className="absolute top-[100px] lg:-left-[10px] animate-pulse" />
                    <img src={bigIdea} alt="" className="flex-shrink-0 block mx-auto lg:mx-0" />
                    <img src={arrow} alt="Arrow" className="absolute left-[40%] lg:left-[90%] lg:top-[90%] top-[90%] animate-pulse" />
                </div>

                <div className="relative column">
                    <h2 className="font-[700] text-[2rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3rem] text-center lg:text-start sm:mt-12 lg:mt-0">Introduction to getlinked</h2>

                    <img src={bigStar} alt="Star" className="absolute left-[90%] animate-pulse -top-8 w-4" />

                    <h2 className="font-[700] text-[2rem] sm:text-[2.5rem] leading-[2.5rem] text-center lg:text-start sm:leading-[3rem] text-[#D434FE] pb-6">tech Hackathon 1.0</h2>

                    <p className="sm:max-w-[80%] lg:max-w-full text-[1.05rem] leading-[1.7rem] text-center lg:text-start mx-auto lg:mx-0">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you&apos;re a coding genius, a
                        design maverick, or a concept wizard, you&apos;ll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that&apos;s what we&apos;re all about!</p>
                </div>
            </div>
        </section>
    )
}
