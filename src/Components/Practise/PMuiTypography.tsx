import { Stack, Typography } from '@mui/material'
import React from 'react'

const PMuiTypography = () => {
  return (
    <Stack spacing = {2} >
        <Typography variant = 'h5' color='error'>
            Hi This is Md Ruhul Amin.
            <Typography variant = 'h5' color='primary'>
                I have complited my Graduation From AIUB
            </Typography>
            <Typography variant='caption' color = 'primary'>
                What are you looking for ? 
            </Typography>
            <Typography variant = 'body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Id repellat nesciunt corporis mollitia sapiente ex, iste eaque quos laudantium,
                  commodi provident deleniti.
                 Vel nesciunt aliquam facilis laborum ratione magnam adipisci?
            </Typography>
        </Typography>
         <Typography variant = 'body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Esse corrupti reiciendis illo unde pariatur nemo modi nulla quis porro consequatur 
            vel quas provident commodi, harum quam ea ullam voluptatum assumenda.
         </Typography>
         <Typography variant = 'subtitle1' paragraph = {true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Esse corrupti reiciendis illo unde pariatur nemo modi nulla quis porro consequatur 
            vel quas provident commodi, harum quam ea ullam voluptatum assumenda.
         </Typography>
         <Typography variant = 'overline'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Esse corrupti reiciendis illo unde pariatur nemo modi nulla quis porro consequatur 
            vel quas provident commodi, harum quam ea ullam voluptatum assumenda.
         </Typography>
         <Typography align = 'left'>
            Student of JU
         </Typography>
         <Typography align = 'right'>
             <ul>
                 <li>JU</li>
                 <li>AIUB</li>
                 <li>NDC</li>
                 <li>MPHS</li>
             </ul>
         </Typography>
    </Stack>
  )
}

export default PMuiTypography