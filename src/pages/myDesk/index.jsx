import React
    from 'react'
import {
    Grid
} from '@mui/material'
import CustomAccordion
    from '../../components/accordion'

const data = [
    {
        'id': 1,
        'name': 'Program for Java Middle Developer ',
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
        ]
    },
    {
        'id': 2,
        'name': 'Program for Java Senior Developer ',
        'description': 'This program is for Senior developer positions ',
        'elements': [
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
        ]
    },
    {
        'id': 3,
        'name': 'Program for Ruby Principal ',
        'description': 'This program is for Principal developer positions ',
        'elements': []
    },
    {
        'id': 4,
        'name': 'Program for Ruby Senior Developer ',
        'description': 'This program is for Senior developer positions ',
        'elements': []
    },
    {
        'id': 5,
        'name': 'Program for Ruby Middle Developer ',
        'description': 'This program is for Middle developer positions ',
        'elements': []
    },
    {
        'id': 6,
        'name': 'Program for Ruby Junior Developer ',
        'description': 'This program is for Junior developer positions ',
        'elements': []
    },
    {
        'id': 7,
        'name': 'Program for Kotlin Principal Developer ',
        'description': 'This program is for Principal developer positions ',
        'elements': []
    },
    {
        'id': 8,
        'name': 'Program for Kotlin Senior Developer ',
        'description': 'This program is for Senior developer positions ',
        'elements': []
    },
    {
        'id': 9,
        'name': 'Program for Kotlin Middle Developer ',
        'description': 'This program is for Middle developer positions ',
        'elements': []
    },
    {
        'id': 10,
        'name': 'Program for Kotlin Junior Developer ',
        'description': 'This program is for Junior developer positions ',
        'elements': []
    },
    {
        'id': 11,
        'name': 'Program for QA Principal Developer ',
        'description': 'This program is for Principal developer positions ',
        'elements': []
    },
    {
        'id': 12,
        'name': 'Program for QA Senior Developer ',
        'description': 'This program is for Senior developer positions ',
        'elements': []
    },
    {
        'id': 13,
        'name': 'Program for QA Middle Developer ',
        'description': 'This program is for Middle developer positions ',
        'elements': []
    },
    {
        'id': 14,
        'name': 'Program for QA Junior Developer ',
        'description': 'This program is for Junior developer positions ',
        'elements': []
    }
]


const MyDesk = () => {
    return (
        <Grid
            container
            spacing={2}
            p={2}>
            <Grid
                item
                xs={12}>
                {data.map((curriculum, index) => (
                    <CustomAccordion
                        key={curriculum.id}
                        curriculum={curriculum}/>
                ))}
            </Grid>
        </Grid>
    )
}

export default MyDesk
