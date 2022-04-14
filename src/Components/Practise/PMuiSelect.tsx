import React from 'react'
import {Box,TextField,MenuItem} from '@mui/material'
const PMuiSelect = () => {
  return (
    <Box width='250px'>
        <TextField
            fullWidth
            color = "info"
            label = "Countries"
            helperText = "Select Country"
            select size = "medium"
        >
            <MenuItem value = "Ban"> Bangladesh </MenuItem>
            <MenuItem value = "EN"> England </MenuItem>


        </TextField>



    </Box>
  )
}

export default PMuiSelect