import { 
    VerticalTimeline, 
    VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { verticalTimelineData } from '../../../lib/verticalTimelineData'


export default function MyVerticalTimeline() {

    return (
        <VerticalTimeline className='vertical-timeline before:bg-[#D434FE]'>

            {verticalTimelineData.map((data, index) => (
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'transparent',
                        color: '#D434FE',
                        boxShadow: "0 0 0 0 transparent, inset 0 0 0 transparent, 0 0 0 0 transparent"
                    }}
                    date={data.date}
                    dateClassName='vertical-timeline-element-date'
                    iconStyle={{
                        background: 'linear-gradient(to right, #FE34B9, #903AFF)',
                        color: '#fff',
                        boxShadow: "0 0 0 transparent",
                        border: "0 unset transparent"
                    }}
                    contentArrowStyle={{
                        display: "none",
                        backgroundColor: "transparent",
                        color: "transparent"
                    }}
                    icon={<data.icon/>}
                >
                    <h3 className="vertical-timeline-element-title text-[1.5rem]">{data.title}</h3>
                    <p className='text-white md:w-[70%]'>{data.content}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline >
    )
}