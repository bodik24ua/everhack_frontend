import React
    from 'react'
import Accordion
    from '@mui/material/Accordion'
import AccordionSummary
    from '@mui/material/AccordionSummary'
import ExpandMoreIcon
    from '@mui/icons-material/ExpandMore'
import Typography
    from '@mui/material/Typography'
import AccordionDetails
    from '@mui/material/AccordionDetails'

const CustomAccordion = ({ curriculum }) => {

    const [expanded, setExpanded] = React.useState(!!curriculum?.open);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Accordion defaultExpanded={expanded} onChange={handleChange(!expanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={`panel1a-header-${curriculum.id}`}
            >
                <Typography>{curriculum.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {curriculum.elements.map((element) => (
                    <Accordion key={element.id}>
                        <AccordionSummary
                            sx={{
                                ...(element.status === "PENDING" || element.status === "FINISHED" ? {
                                    background: element.status === "PENDING" ? '#ffff0063' : '#80fe3561',
                                } : {background: 'inherit'}),

                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel2a-content-${element.id}`}
                            id={`panel2a-header-${element.id}`}
                        >
                            <Typography>{element.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {element.steps ? (
                                <ul>
                                    {element.steps.map((step, index) => (
                                        <li key={index}>{step.title}</li>
                                    ))}
                                </ul>
                            ) : (
                                'No steps available'
                            )}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordion
