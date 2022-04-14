import React from 'react'

import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    CardActions,
    CardMedia 
} from "@mui/material"

const MuiCard = () => {
  return (
    <Box width = '300px'>
        <Card>
            <CardContent>
                <Typography gutterBottom variant = 'h5' component = 'div'>
                    React Js Tutorial
                </Typography>
                <Typography variant = 'body2' color = 'text.secondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem enim dolor accusamus earum modi,
                     exercitationem reiciendis magni nobis error omnis eum quisquam, 
                     incidunt quis velit id nostrum similique voluptatum sequi?
                     <Button  variant = 'contained' color = 'warning' size = 'small'> Contact Us  </Button>
                </Typography>
            </CardContent>
        </Card>
        <Card>
            <CardMedia
                component = 'img' 
                height = '140px'
                image = 'https://source.unsplash.com/random'
            />
            <CardContent>
                <Typography component = 'div' variant = 'h5' >
                    Md Ruhul Amin 
                </Typography>
                <Typography component = 'div' variant = 'h6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus distinctio nisi molestias adipisci saepe expedita
                     dolorem harum quidem amet numquam iste esse veritatis, ullam 
                     cumque, aperiam eligendi. Porro, quia ipsa?
                </Typography>
                <Typography component = 'div' variant = 'h6'>
                    <Button variant ='contained' color = 'warning' size = 'small' > Confirmed </Button>
                </Typography>
                <CardActions>
                    <Button variant = 'contained'>Share</Button>
                    <Button variant = 'contained'>Learn More </Button>
                </CardActions>
            </CardContent>
        </Card>
        <Card>
            <CardMedia  
                component = 'img'
                height = '140px'
                image = 'https://source.unsplash.com/random'
            />
            <CardContent>
                <Typography component = 'div' variant = 'body1' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non reprehenderit placeat quam minima qui. 
                    Id, voluptatum! Temporibus dicta doloremque dignissimos libero 
                    at corrupti nemo architecto, nostrum cumque omnis maiores eum!
                </Typography>
                <CardActions>
                    <Button size = 'small' variant = 'text'>Learn More</Button>
                    <Button size = 'small' variant = 'contained'>Share & Subscrie</Button>
                </CardActions>
            </CardContent>
        </Card>
    </Box>
  )
}
export default MuiCard