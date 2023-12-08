import rulesImage from "./assets/rulesImage.png";
import grayStar from "./assets/gray_star.png";
import star from "./assets/star.png"
import AnimateComponent from "../animation/AnimateComponent";


export default function Rules() {

    return (
        <AnimateComponent
            className={`min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 lg:px-0 py-[150px] lg:py-[100px] overflow-x-hidden justify-center flex items-center`}>

            <div className="w-full columns is-desktop lg:justify-between lg:w-[90%] mx-auto is-vcentered is-centered relative columns is-desktop lg:items-center is-flex-direction-row-reverse">
                <div className="relative z-30 column">
                    <img src={rulesImage} alt="A lady sitting on a chair" className={`$ w-full block`} />
                    <img src={star} alt="Star" className="absolute w-4 top-[20%] animate-pulse lg:top-[70%]" />
                </div>

                <div className="circle absolute -top-[10%] -left-[30%] lg:left-[10%] lg:top-0"></div>

                <div className="circle absolute top-[50%] left-[50%] lg:right-0 lg:top-[50%]"></div>

                <div className="lg:w-[80%] relative z-30 column">
                    <img src={grayStar} alt="Star" className="absolute left-[40%] w-4 -top-[20%] animate-pulse z-30 block" />

                    <h2 className="font-[700] text-[2.25rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3rem] text-center lg:text-start">Rules and</h2>

                    <h2 className="font-[700] text-[2.25rem] sm:text-[2.5rem] leading-[2.5rem] text-center lg:text-start sm:leading-[3rem] text-[#D434FE] pb-6">Guildlines</h2>

                    <p className="max-w-[90%] sm:max-w-[80%] xl:max-w-[90%] mx-auto lg:mx-0 text-[1.05rem] leading-[1.7rem] text-center lg:text-start">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you&apos;re a coding genius, a
                        design maverick, or a concept wizard, you&apos;ll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that&apos;s what we&apos;re all about!</p>
                </div>
            </div>
        </AnimateComponent>
    )
}
