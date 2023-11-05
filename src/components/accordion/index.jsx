import React
    from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'
import ExpandMoreIcon
    from '@mui/icons-material/ExpandMore'

const AccordionController = ({accordionData}) => {
    return (
        <div>
            {accordionData &&
                accordionData.map((accordion, i) => {
                    const {
                        title,
                        disabled = false,
                        defaultExpanded = false,
                        titleConfig,
                        accordionSummaryConfig,
                    } = accordion
                    const id = `${title}-${i}`
                    return (
                        <Accordion
                            disabled={disabled}
                            key={id}
                            defaultExpanded={defaultExpanded}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon/>}
                                aria-controls={id}
                                sx={accordionSummaryConfig?.sx}
                                id={id}>
                                <Typography
                                    component={titleConfig?.component || 'div'}
                                    align={titleConfig?.align}
                                    sx={titleConfig?.sx}
                                    variant={titleConfig?.variant}>
                                    {title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              {accordion?.details}
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
        </div>
    )
}

export default AccordionController
