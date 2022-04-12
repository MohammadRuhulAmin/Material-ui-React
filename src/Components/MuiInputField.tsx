import React from 'react'
import {Stack,TextField } from '@mui/material'
export const MuiInputField = () => {
  return (
    <Stack spacing = {2} direction = 'row' >
        <TextField label = "What is Your Name ? " />
        <TextField label = "what is your name ?" />
        <TextField label = "What do you do ? " variant = 'standard' />
        <Stack spacing = {3} direction = 'row'>
            <TextField  label = "Name " size = 'small' color = 'success'  />
            <TextField  label = "Email " size = 'medium' color = 'warning' />
            <TextField  
                label = 'Password'
                required 
                helperText = 'Dont Share your Password'
                type = 'password' 
             />

        </Stack>
    </Stack>
  )
}
