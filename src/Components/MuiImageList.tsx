import React from 'react'
import {Stack,ImageList,ImageListItem } from "@mui/material"
const MuiImageList = () => {
  return (
    <Stack spacing = {4}>
        <ImageList 
            sx = {{width:500,height:450}}
            cols={3}
            rowHeight = {164}
        >
            {
                itemData.map(item =>(
                    <ImageListItem key = {item.img}>
                        <img  src ={ `${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt = {item.title} loading='lazy' />
                    </ImageListItem>
                ))
            }
        </ImageList>
    </Stack>
  )
}


const itemData = [
    {
        img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title:'Breakfast'
    },
    {
        img:'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title:'Burger'
    }
]

export default MuiImageList 