import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { questionsAndAnswers } from '../../lib/questionsAndAnswers';

export default function MyAccordion() {
    

    return (
        <div className='my-12'>
            {questionsAndAnswers.map((data, index) => (
                <Accordion
                    key={index}
                    sx={{
                        backgroundColor: "transparent",
                        color: "#FFFFFF",
                        borderBottom: "1px solid #D434FE",
                        boxShadow: "0px 0px 0px 0px transparent",
                        '& .MuiPaper-root-MuiAccordion-root': {
                            margin: "0px",
                            '& .Mui-expanded': {
                                margin: "0px"
                            }
                        },
                        '& .MuiAccordionSummary-root': {
                            padding: "0px",
                            gap: "1rem"
                        },
                        '& .MuiTypography-root': {
                            padding: "1rem 0"
                        },
                        '& .MuiAccordionDetails-root': {
                            padding: "8px 0px 16px"
                        },
                        '& .Mui-expanded': { margin: "-20px 0" },
                        '& .MuiAccordionSummary-content.Mui-expanded': {
                            margin: "10px 0"
                        },
                        '& .MuiAccordionSummary-expandIconWrapper': {
                            color: "#D434FE"
                        },
                        '& .': {
                            margin: "0px"
                        }
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{data.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{data.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
