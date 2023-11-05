import React
    from 'react'

import {
    Grid
} from '@mui/material'
import CustomAccordion
    from '../../components/accordion'


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
                'title': 'Expert Database Management',
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
                'title': 'Expert Version Control',
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
                'title': 'TEST for position Java Senior Developer',
                'steps': null
            }
        ],

        'totalQuantityCurriculumElement': 5,
        'finishedCurriculumElement': 1
    },
]

const CareerRole = () => {
    return (
        <Grid container spacing={2} p={2}>
            <Grid item xs={6}>
                {accordionData.map((curriculum, index) => (
                    <CustomAccordion key={curriculum.id} curriculum={curriculum} />
                ))}
            </Grid>
            <Grid item xs={6}>
                {accordionDataWish.map((curriculum, index) => (
                    <CustomAccordion key={curriculum.id} curriculum={curriculum} />
                ))}
            </Grid>
        </Grid>
    );
};

export default CareerRole;
