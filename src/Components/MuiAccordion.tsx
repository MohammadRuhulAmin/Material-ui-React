import React from 'react'
import { Accordion,AccordionSummary,AccordionDetails,Typography } from '@mui/material'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
const MuiAccordion = () => {
  return (
    <div>
        <Accordion>
            <AccordionSummary id = 'panel1-header' aria-controls = 'panel1-content' expandIcon = {<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis, rem ea nulla itaque explicabo similique
                     labore voluptatibus cupiditate non, suscipit ratione amet aliquid dignissimos eius pariatur impedit. Illo, aperiam!
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id = 'panel1-header' aria-controls = 'panel1-content' expandIcon = {<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis, rem ea nulla itaque explicabo similique
                     labore voluptatibus cupiditate non, suscipit ratione amet aliquid dignissimos eius pariatur impedit. Illo, aperiam!
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id = 'panel1-header' aria-controls = 'panel1-content' expandIcon = {<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis, rem ea nulla itaque explicabo similique
                     labore voluptatibus cupiditate non, suscipit ratione amet aliquid dignissimos eius pariatur impedit. Illo, aperiam!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion