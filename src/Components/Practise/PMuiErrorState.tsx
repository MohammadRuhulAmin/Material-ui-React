import React from 'react'
import {useState} from 'react'
import {TextField} from "@mui/material"
const PMuiErrorState = () => {
    const [value,setValue] = useState('') 
  return (
    <div>
        <TextField 
            label ="Form Input"
            required
            value = {value}
            onChange = {(e)=>setValue(e.target.value)}
            error = {!value}
            helperText = {
                !value?'Required':'Donot Share your Information'
            }
        />
    </div>
  )
}

export default PMuiErrorState