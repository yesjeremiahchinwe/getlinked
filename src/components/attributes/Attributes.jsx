import grayStar from "./assets/gray_star.png";
import star from "./assets/star.png"
import bigStar from "./assets/bigStar.png"
import attributeImage from "./assets/attributesImage.png";
import { Link } from "react-router-dom";


export default function Attributes() {

    return (
        <section className="min-h-screen bg-[#150E28] text-[#F8F8F8] px-4 lg:px-0 pb-[200px] pt-[100px] overflow-x-hidden flex flex-col justify-center items-center">

            <div className="columns is-desktop lg:justify-between lg:w-[90%] mx-auto is-vcentered is-centered relative">
                    <div className="relative z-30 column">
                        <img src={bigStar} alt="Star" className="absolute w-6 -top-[20%] left-[20%]" />
                        <img src={attributeImage} alt="" className="flex-shrink-0 w-full lg:w-[1200px]" />
                        <img src={grayStar} alt="Star" className="w-6 absolute left-[50%] top-[60%] animate-pulse z-30 block" />
                        <img src={star} alt="Star" className="absolute w-6 animate-pulse left-[90%] top-[90%]" />
                    </div>

                    <div className="circle absolute top-[20%] lg:top-[40%] left-0 lg:left-[10%] "></div>

                    <div className="lg:w-[90%] relative mt-2 z-30 column">
                        <h2 className="font-[700] text-[2.25rem] leading-[3rem] sm:leading-[3rem] text-center lg:text-start">Judging Criteria</h2>

                        <h2 className="font-[700] text-[2.25rem] leading-[2.5rem] text-center lg:text-start sm:leading-[3rem] text-[#D434FE] pb-6">Key attributes</h2>

                        <p className="max-w-[90%] sm:max-w-[80%] mx-auto lg:mx-0 text-[1.05rem] leading-[1.7rem] text-center lg:text-start"><span className="text-[#FF26B9]">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel
                            way or introduces innovative features.</p>

                        <p className="max-w-[90%] py-2 sm:max-w-[80%] mx-auto lg:mx-0 text-[1.05rem] leading-[1.7rem] text-center lg:text-start"><span className="text-[#FF26B9]">Functionality:</span> Assess how well the solution works. Does it perform its
                            intended functions effectively and without major issues? Judges would
                            consider the completeness and robustness of the solution.</p>

                        <p className="max-w-[90%] py-2 sm:max-w-[80%] mx-auto lg:mx-0 text-[1.05rem] leading-[1.7rem] text-center lg:text-start"><span className="text-[#FF26B9]">Impact and Relevance:</span> Determine the potential impact of the solution
                            in the real world. Does it address a significant problem, and is it relevant
                            to the target audience? Judges would assess the potential social,
                            economic, or environmental benefits.</p>

                        <p className="max-w-[90%] py-2 sm:max-w-[80%] mx-auto lg:mx-0 text-[1.05rem] leading-[1.7rem] text-center lg:text-start"><span className="text-[#FF26B9]">Technical Complexity: </span> Evaluate the technical sophistication of the solution.
                            Judges would consider the complexity of the code, the use of advanced
                            technologies or algorithms, and the scalability of the solution.</p>

                        <p className="max-w-[90%] py-2 sm:max-w-[80%] mx-auto lg:mx-0 text-[1.05rem] leading-[1.7rem] text-center lg:text-start"><span className="text-[#FF26B9]">Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered
                            to the rules and guidelines of the hackathon, including deadlines, use of
                            specific technologies or APIs, and any other competition-specific requirements.</p>

                        <button className="bg-[#903AFF]  hover:scale-[1.05] bg-gradient-to-r to-[#903AFF] from-[#FE34B9] mt-8 py-3 px-10 rounded-md block mx-auto lg:mx-0">
                            <Link to="#" className="hover:text-white">Read More</Link>
                        </button>
                    </div>

                    <div className="circle absolute top-[50%] left-[50%] lg:left-[70%] lg:right-0 lg:top-[80%]"></div>
                </div>
        </section>
    )
}
