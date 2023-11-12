import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    PiNumberFiveBold,
    PiNumberFourBold,
    PiNumberSixBold,
    PiNumberThreeBold,
    PiNumberTwoBold,
    PiNumberOneBold,
} from "react-icons/pi"


export default function MyVerticalTimeline() {

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: '#D434FE' }}
                date="November 18, 2023"
                iconStyle={{ background: 'linear-gradient(to right, #FE34B9, #903AFF)', color: '#fff' }}
                icon={<PiNumberOneBold />}
            >
                <h3 className="vertical-timeline-element-title text-[1.5rem]">Hackathon Announcement</h3>
                <p className='text-white md:w-[70%]'>
                    The getlinked tech hackathon 1.0 is formally announced
                    to the general public and teams begin to get ready to register
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: '#D434FE' }}
                date="November 18, 2023"
                iconStyle={{ background: 'linear-gradient(to right, #FE34B9, #903AFF)', color: '#fff' }}
                icon={<PiNumberTwoBold />}
            >
                <h3 className="vertical-timeline-element-title text-[1.5rem]">Teams Registration begins</h3>
                <p className='text-white md:w-[70%]'>
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: '#D434FE' }}
                date="November 18, 2023"
                iconStyle={{ background: 'linear-gradient(to right, #FE34B9, #903AFF)', color: '#fff' }}
                icon={<PiNumberThreeBold />}
            >
                <h3 className="vertical-timeline-element-title text-[1.5rem]">Teams Registration ends</h3>
                <p className='text-white md:w-[70%]'>
                    Interested Participants are no longer Allowed to register
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: '#D434FE' }}
                date="November 18, 2023"
                iconStyle={{ background: 'linear-gradient(to right, #FE34B9, #903AFF)', color: '#fff' }}
                icon={<PiNumberFourBold />}
            >
                <h3 className="vertical-timeline-element-title text-[1.5rem]">Announcement of the accepted teams and ideas</h3>
                <p className='text-white md:w-[70%]'>
                    All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', color: '#D434FE' }}
                date="November 18, 2023"
                iconStyle={{ background: 'linear-gradient(to right, #FE34B9, #903AFF)', color: '#fff' }}
                icon={<PiNumberFiveBold />}
            >
                <h3 className="vertical-timeline-element-title text-[1.5rem]">Getlinked Hackathon 1.0 Offically Begins</h3>
                <p className='text-white md:w-[70%]'>
                    Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'transparent', color: '#D434FE' }}
                date="November 18, 2023"
                iconStyle={{ background: 'linear-gradient(to right, #FE34B9, #903AFF)', color: '#fff' }}
                icon={<PiNumberSixBold />}
            >
                <h3 className="vertical-timeline-element-title text-[1.5rem]">Demo Day</h3>
                <p className='text-white md:w-[70%]'>
                    Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
            </VerticalTimelineElement>
        </VerticalTimeline >
    )
}