import star from "./assets/star.png"
import smallStar from "./assets/smallStar.png"
import partners from "./assets/partners.png"

export default function Partners() {

    return (
        <section className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 lg:px-0 pb-[150px] pt-[100px] overflow-x-hidden flex flex-col justify-center items-center">

            <div className="lg:w-[90%] mx-auto relative">
                <h2 className="font-[700] text-[2.25rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[3rem] text-center">Partners and Sponsors</h2>

                <p className="mx-auto text-[1.05rem] leading-[1.7rem] text-center py-4 sm:w-[70%] lg:w-[40%] z-30">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>

                <div className="circle absolute top-[20%] -left-[50%] lg:-left-[10%]"></div>

                <div className="circle absolute top-[60%] -right-[50%] lg:-right-[10%]"></div>

                <img src={smallStar} alt=" Star" className="absolute w-4 top-[30%] lg:top-[20%] left-[5%] animate-pulse" />

                <article className="flex items-center justify-center mx-auto border-[1px] border-[#D434FE] rounded-sm my-[60px] p-4 sm:p-16 lg:p-28 relative">
                    <img src={star} alt="Star" className="absolute w-4 top-[80%] animate-pulse left-[50%]" />

                    <img src={smallStar} alt=" Star" className="absolute w-4 top-[15%] left-[50%] animate-pulse" />

                    <img src={partners} alt="Partners and Sponsors" className="z-30 w-full lg:w-[80%]" />
                </article>
            </div>
        </section>
    )
}
