import React, { useState } from 'react'
import {
    Box,
    Typography,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio
} from "@mui/material"

const MuiRadioButton = () => {
   

  return (
    <Box>   
       <FormControl>
           <FormLabel id = "jobExp">Years of Job Experience </FormLabel>
       </FormControl>
       <RadioGroup>
           <FormControlLabel  control = {<Radio/>} label = "2 Years" />
           <FormControlLabel control = {<Radio/>} label = "4 Years" />
           <FormControlLabel control = {<Radio/>}  label = "5 Years" />
       </RadioGroup>
    </Box>
  )
}

export default MuiRadioButton