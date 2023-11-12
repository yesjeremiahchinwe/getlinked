import prizeCup from "./assets/prize_cup.png"
import firstP from "./assets/1stposition.png"
import secondP from "./assets/2ndposition.png"
import thirdP from "./assets/3rdposition.png"
import grayStar from "./assets/gray_star.png"
import star from "./assets/star.png"
import smallStar from "./assets/smallStar.png"



export default function Prizes() {

    return (
        <section className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 lg:px-0 pb-[150px] pt-[100px] overflow-x-hidden flex flex-col justify-center items-center">

            <div className="lg:w-[90%] columns is-desktop lg:justify-between mx-auto relative flex flex-col items-center lg:items-end justify-center gap-12">
                <div className="column flex flex-col items-center lg:items-start">
                    <h2 className="font-[700] text-[2.25rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3rem] text-center lg:text-start z-30">Prizes and</h2>

                    <h2 className="font-[700] text-[2.25rem] sm:text-[2.5rem] leading-[2.5rem] text-center lg:text-start sm:leading-[3rem] text-[#D434FE] pb-6 z-30">Rewards</h2>

                    <p className="mx-auto lg:mx-0 lg:w-[70%] text-[1.15rem] leading-[1.7rem] text-center w-full lg:text-start z-30">Highlight of the prizes or rewards for winners and for participants.</p>
                </div>

                <img src={grayStar} alt="Star" className="w-6 absolute left-[80%] top-[100%] lg:top-[92%] animate-pulse z-30" />

                <img src={star} alt="Star" className="absolute w-6 top-[30%] animate-pulse left-[50%]" />

                <img src={star} alt="Star" className="absolute w-6 top-[50%] animate-pulse left-[90%] lg:left-[100%]" />

                <img src={smallStar} alt=" Star" className="absolute w-4 top-[5%] left-[80%] animate-pulse" />

                <img src={smallStar} alt=" Star" className="absolute w-4 top-0 left-[20%] animate-pulse" />

                <div className="columns py-16 is-desktop lg:w-[90%] mx-auto is-vcentered is-centered relative">
                    <div className="circle absolute top-0 left-[10%]"></div>

                    <img
                        src={prizeCup}
                        alt="Golden color Award Cup"
                        className="z-30 column relative"
                    />

                    <article className="flex items-end justify-center gap-y-8 z-30 relative column">
                        <img src={secondP} alt="" className="w-[30%]" />
                        <img src={firstP} alt="" className="w-[40%]" />
                        <img src={thirdP} alt="" className="w-[30%] z-30" />
                        <div className="circle absolute top-[60%] left-[80%] lg:right-0 lg:top-[70%]"></div>
                    </article>
                </div>
            </div>
        </section>
    )
}
