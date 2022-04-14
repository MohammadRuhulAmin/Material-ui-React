import React, { useState } from 'react'
import {Accordion,AccordionSummary,AccordionDetails,Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"


const PMuiAccordion = () => {
    // const [expanded , setExpanded] = useState<string | false> (false)
  return (
    <div>
        <Accordion>
            <AccordionSummary
                id = 'panel1-header'
                aria-controls = 'panel1-content'
                expandIcon = {<ExpandMoreIcon/>}
            >
                <h5>MSc In Computer Science </h5>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant = 'body1' color = 'info'>
                    I have completed My Post Graduation From Jahangirnagar University With CGPA : 3.44 on a Scale of 4.00 
                    My Courses were Database System , Algorithms , Mobile Application & Web Development 
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon = {<ExpandMoreIcon/>}
            >
                <h5>BSc In Computer Science & Engineering </h5>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant = 'body1' color = 'primary'>
                    Completed My Bachelor in Science From 
                    American International University Bangladesh with CGPA : 3.27 On a Scale of 4.00 

                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default PMuiAccordion