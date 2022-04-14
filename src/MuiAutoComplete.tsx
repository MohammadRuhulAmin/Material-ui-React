import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const skills = ['Html','CSS','Javascript','TypeScript','React','PHP','Python']
const MuiAutoComplete = () => {
  const [field,setField] = useState<string | null>(null)
  return (
    <div>
        <Autocomplete 
            options = {skills}
            renderInput = {(params)=><TextField {...params} label = 'Skills' />}
            onChange = {(event:any,newval:string | null) => setField(newval)}
            freeSolo
        />
        <h1>{field}</h1>
    </div>
  )
}

export default MuiAutoComplete