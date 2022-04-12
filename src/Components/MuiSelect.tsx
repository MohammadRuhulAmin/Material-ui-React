import React from 'react'
import {useState} from 'react'
import {Box,TextField,MenuItem} from '@mui/material'
const MuiSelect = () => {
    const [country,setCountry] = useState<string[]>([])
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value
        setCountry(typeof value === 'string' ? value.split(',') : value)
    }
  return (
    <Box width='250px'>
        <h1>You Selected :  {country} Country </h1>
        <TextField
            label = 'Select Country'
            select size='medium'
            value = {country} 
            onChange = {handleChange}
            fullWidth
            SelectProps={{multiple:true}}
            error
            helperText = 'please select the countries'
         >
            <MenuItem></MenuItem>
            <MenuItem value='BN'>Bangladesh</MenuItem>
            <MenuItem value='Eng'>England</MenuItem>
            <MenuItem value = 'Canada'>Canada</MenuItem>
            <MenuItem value = 'Australia'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect
