import React from 'react'
import {Box} from "@mui/material"
const MuiLayout = () => {
  const  boxStyle = {
    backgroundColor : 'primary.main',
    color:'white',
    height : '100px',
    width :'500px',
    padding:'16px',
    '&:hover':{
      backgroundColor:'primary.light'
    }

  }
  return (
  
    <>
        <Box >
          <Box component = 'h1'>
              Md Ruhul Amin 
              ruhulamin.cs.dev@gmail.com
          </Box>
          <Box component = 'div' sx = {boxStyle} >
              Md Ruhul Amin 
              ruhulamin.cs.dev@gmail.com
          </Box>
      </Box>
      <Box
        display = 'flex'
        height  = '100px'
        width  = '100px'
        bgcolor = 'success.light'
        p = {2}
      >

      </Box>
    
    </>
  )
}

export default MuiLayout