import React from 'react'
import {InputAdornment, Stack , TextField} from "@mui/material"

const PTextField = () => {
  return (
      <Stack direction = "row" spacing = {2}>
          <TextField  
                label = "Your Name ??" 
                variant = "filled"
                required 
          />
          <TextField  
                label = "Email "
                variant = "standard"
                size = "small"
                color = "error"
                required
                helperText = "Please Dont show your password!"
                type = "password"
             

          />
          <TextField 
                inputProps={{readOnly:true}}
                value = "Md Ruhul Amin"
                helperText = "You cannot change your Name ! This is a Token !~"
          />
          <TextField
                label = 'Amount' 
               InputProps={{
                   startAdornment:<InputAdornment position = "start">$</InputAdornment>,
               }}

          />
          <TextField
                label ="Total Amount : " 
                InputProps = {{
                    startAdornment:<InputAdornment position = "start">$</InputAdornment>,
                }}
          />

      </Stack>
  )
}

export default PTextField

