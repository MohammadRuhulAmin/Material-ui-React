import React from 'react'
import {Box, Stack,Grid,Paper} from "@mui/material"
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
    <Paper sx = {{padding:'32px'}} elevation = {10}>
      <Stack sx = {{border:'1px solid'}} direction = 'row-reverse' spacing = {2}> 
        <Box>
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
    
    </Stack>
    <Grid container p = {4}>
        <Grid item>
          <Box bgcolor = 'primary.light' p = {2}>Item 1</Box>
        </Grid>
        <Grid item>
          <Box bgcolor = 'error.light' p = {2}>Item 2</Box>
        </Grid>
        <Grid item>
          <Box bgcolor = 'success.light' p = {2}>Item 3</Box>I
        </Grid>
        <Grid item>
          <Box bgcolor = 'warning.light' p = {2}>Item 4</Box>
        </Grid>
    </Grid>
    
    </Paper>
  )
}

export default MuiLayout