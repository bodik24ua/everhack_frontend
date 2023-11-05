import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionData = {
    "currentRoleCurriculums": [
        {
            "curriculum": {
                "id": 1,
                "name": "Program for Java Middle Developer ",
                "description": "This program is for Middle developer positions ",
                "elements": [
                    {
                        "id": 1,
                        "type": "COURSE",
                        "position": 1,
                        "status": "FINISHED",
                        "title": "Java Core",
                        "steps": [
                            {
                                "title": "step 1"
                            },
                            {
                                "title": "step 2"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "type": "COURSE",
                        "position": 2,
                        "status": "FINISHED",
                        "title": "Spring Framework Fundamentals Course",
                        "steps": [
                            {
                                "title": "step 1"
                            },
                            {
                                "title": "step 2"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "type": "COURSE",
                        "position": 3,
                        "status": "FINISHED",
                        "title": "Database Management with SQL Course",
                        "steps": [
                            {
                                "title": "step 1"
                            },
                            {
                                "title": "step 2"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "type": "COURSE",
                        "position": 4,
                        "status": "FINISHED",
                        "title": "Version Control with Git Course",
                        "steps": [
                            {
                                "title": "step 1"
                            },
                            {
                                "title": "step 2"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "type": "SURVEY",
                        "position": 5,
                        "status": "PENDING",
                        "title": "TEST for position Java Middle Developer",
                        "steps": null
                    }
                ]
            },
            "totalQuantityCurriculumElement": 5,
            "finishedCurriculumElement": 4
        }
    ],
    "wishedRoleCurriculums": [
        {
            "curriculum": {
                "id": 2,
                "name": "Program for Java Senior Developer ",
                "description": "This program is for Senior developer positions ",
                "elements": [
                    {
                        "id": 6,
                        "type": "COURSE",
                        "position": 1,
                        "status": "PENDING",
                        "title": "Advanced Java Topics",
                        "steps": [
                            {
                                "title": "step 1"
                            },
                            {
                                "title": "step 2"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "type": "COURSE",
                        "position": 2,
                        "status": "FINISHED",
                        "title": "Spring Framework Fundamentals Course",
                        "steps": [
                            {
                                "title": "step 1"
                            },
                            {
                                "title": "step 2"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "type": "COURSE",
                        "position": 3,
                        "status": "PENDING",
                        "title": "Database Management with SQL Course",
                        "steps": [
                            {
                                "title": "step 1"
                            },
                            {
                                "title": "step 2"
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "type": "COURSE",
                        "position": 4,
                        "status": "PENDING",
                        "title": "Version Control with Git Course",
                        "steps": [
                            {
                                "title": "step 1"
                            },
                            {
                                "title": "step 2"
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "type": "SURVEY",
                        "position": 5,
                        "status": "PENDING",
                        "title": "TEST for position Java Middle Developer",
                        "steps": null
                    }
                ]
            },
            "totalQuantityCurriculumElement": 5,
            "finishedCurriculumElement": 1
        }
    ]
}

const CurriculumAccordion = ({ curriculum }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{curriculum.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {curriculum.elements.map((element) => (
                    <Accordion key={element.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
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

const NestedAccordions = ({ accordionData }) => {
    return (
        <div>
            {accordionData.currentRoleCurriculums.map((role) => (
                <CurriculumAccordion key={role.curriculum.id} curriculum={role.curriculum} />
            ))}
            {accordionData.wishedRoleCurriculums.map((role) => (
                <CurriculumAccordion key={role.curriculum.id} curriculum={role.curriculum} />
            ))}
        </div>
    );
};

const Roles = () => {
    return <NestedAccordions accordionData={accordionData} />;
};

export default Roles;
