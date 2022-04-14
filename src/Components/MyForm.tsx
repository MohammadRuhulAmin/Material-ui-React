import React from 'react'
import {TextField, Typography,MenuItem,Box} from '@mui/material'
import {useState} from 'react'
import MuiRadioButton from './MuiRadioButton'

const MyForm = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [country,setCountry] = useState('')
  const handlChangeCountry = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.target.value 
    setCountry(value)
  }
  return (
    <div>
        <TextField 
            label = "Name "
            required
            value = {name}
            type = "text"
            error = {!name}
            onChange = {(e)=>setName(e.target.value)}
            helperText = {
                !name?"Mandatory Field":"Dont Share Your Info"
            }
        />
        <TextField
            label = "Email"
            value = {email}
            type = "email"
            error = {!email}
            required
            onChange = {(e)=>setEmail(e.target.value)}
            helperText = {
                !email?"Enter Email" :"Dont Share your Email"
            }
        />
        <Box width = "250px">
            <TextField
                label = "Select Country"
                required 
                error = {!country}
                fullWidth
                select size = "medium"
                value = {country}
                onChange = {handlChangeCountry}
                helperText = {!country?"Select Your Country":"Dont Share your Country Information"}
            >
                <MenuItem value = "Bangladesh">Bangladesh</MenuItem>
                <MenuItem value = "Canada">Canada</MenuItem>
                <MenuItem value = "America">America</MenuItem>
            </TextField>
            <MuiRadioButton/>
        </Box>
      
        <Typography color = "info" variant = "body1">{name} :  {email} :  {country}</Typography>
    </div>
  )
}

export default MyForm