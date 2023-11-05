import React
    from 'react'
import Accordion
    from '@mui/material/Accordion'
import AccordionSummary
    from '@mui/material/AccordionSummary'
import AccordionDetails
    from '@mui/material/AccordionDetails'
import Typography
    from '@mui/material/Typography'
import ExpandMoreIcon
    from '@mui/icons-material/ExpandMore'
import {
    Grid
} from '@mui/material'
import * as PropTypes
    from 'prop-types'

const accordionData = [
    {
        open: true,
        'id': 1,
        'name': 'Program for Java Middle Developer                  4/5',
        'description': 'This program is for Middle developer positions ',
        'elements': [
            {
                'id': 1,
                'type': 'COURSE',
                'position': 1,
                'status': 'FINISHED',
                'title': 'Java Core',
                'steps': [
                    {
                        'title': 'step 1'
                    },
                    {
                        'title': 'step 2'
                    }
                ]
            },
            {
                'id': 2,
                'type': 'COURSE',
                'position': 2,
                'status': 'FINISHED',
                'title': 'Spring Framework Fundamentals Course',
                'steps': [
                    {
                        'title': 'step 1'
                    },
                    {
                        'title': 'step 2'
                    }
                ]
            },
            {
                'id': 3,
                'type': 'COURSE',
                'position': 3,
                'status': 'FINISHED',
                'title': 'Database Management with SQL Course',
                'steps': [
                    {
                        'title': 'step 1'
                    },
                    {
                        'title': 'step 2'
                    }
                ]
            },
            {
                'id': 4,
                'type': 'COURSE',
                'position': 4,
                'status': 'FINISHED',
                'title': 'Version Control with Git Course',
                'steps': [
                    {
                        'title': 'step 1'
                    },
                    {
                        'title': 'step 2'
                    }
                ]
            },
            {
                'id': 5,
                'type': 'SURVEY',
                'position': 5,
                'status': 'PENDING',
                'title': 'TEST for position Java Middle Developer',
                'steps': null
            }
        ],
        'totalQuantityCurriculumElement': 5,
        'finishedCurriculumElement': 4
    }
]
const accordionDataWish = [
    {
        open: true,
        'id': 2,
        'name': 'Program for Java Senior Developer                  1/5',
        'description': 'This program is for Senior developer positions ',
        'elements': [
            {
                'id': 7,
                'type': 'COURSE',
                'position': 2,
                'status': 'FINISHED',
                'title': 'Spring Framework Fundamentals Course',
                'steps': [
                    {
                        'title': 'step 1'
                    },
                    {
                        'title': 'step 2'
                    }
                ]
            },
            {
                'id': 6,
                'type': 'COURSE',
                'position': 1,
                'status': 'PENDING',
                'title': 'Advanced Java Topics',
                'steps': [
                    {
                        'title': 'step 1'
                    },
                    {
                        'title': 'step 2'
                    }
                ]
            },
            {
                'id': 8,
                'type': 'COURSE',
                'position': 3,
                'status': 'PENDING',
                'title': 'Database Management with SQL Course',
                'steps': [
                    {
                        'title': 'step 1'
                    },
                    {
                        'title': 'step 2'
                    }
                ]
            },
            {
                'id': 9,
                'type': 'COURSE',
                'position': 4,
                'status': 'PENDING',
                'title': 'Version Control with Git Course',
                'steps': [
                    {
                        'title': 'step 1'
                    },
                    {
                        'title': 'step 2'
                    }
                ]
            },
            {
                'id': 10,
                'type': 'SURVEY',
                'position': 5,
                'status': 'PENDING',
                'title': 'TEST for position Java Middle Developer',
                'steps': null
            }
        ],

        'totalQuantityCurriculumElement': 5,
        'finishedCurriculumElement': 1
    },
]

function CheckCircleIcon(props) {
    return null
}

CheckCircleIcon.propTypes = {
    style: PropTypes.shape({
        marginRight: PropTypes.number,
        color: PropTypes.string
    })
}

function ErrorIcon(props) {
    return null
}

ErrorIcon.propTypes = {
    style: PropTypes.shape({
        marginRight: PropTypes.number,
        color: PropTypes.string
    })
}
const getStatusIcon = (status) => {
    switch (status) {
        case 'FINISHED':
            return <CheckCircleIcon style={{ color: 'green', marginRight: 4 }} />;
        case 'PENDING':
            return <ErrorIcon style={{ color: 'yellow', marginRight: 4 }} />;
        default:
            return null;
    }
};

const CurriculumAccordion = ({ curriculum }) => {

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
                                    // ... more styles
                                } : {background: 'inherit'}),
                                // ... other styles that are not conditional
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel2a-content-${element.id}`}
                            id={`panel2a-header-${element.id}`}
                        >
                            <>
                                {getStatusIcon(element.status)}
                                <Typography>{element.title}</Typography>
                            </>
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

const CareerRole = () => {
    return (
        <Grid container spacing={2} p={2}>
            <Grid item xs={6}>
                {accordionData.map((curriculum, index) => (
                    <CurriculumAccordion key={curriculum.id} curriculum={curriculum} />
                ))}
            </Grid>
            <Grid item xs={6}>
                {accordionDataWish.map((curriculum, index) => (
                    <CurriculumAccordion key={curriculum.id} curriculum={curriculum} />
                ))}
            </Grid>
        </Grid>
    );
};

export default CareerRole;
