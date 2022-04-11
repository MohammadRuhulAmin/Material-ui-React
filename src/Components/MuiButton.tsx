import React from 'react'
import {Stack,Button,IconButton,ButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const MuiButton = () => {
  return (
      <div>
        <Stack spacing={2} direction = 'row'>
            <Button variant='text' href='https://google.com'>Texed</Button>
            <Button variant = 'contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction = 'row'>
            <Button variant = 'contained' color='error'>Error</Button>
            <Button variant = 'contained' color='success'>Success</Button>
            <Button variant = 'contained' color='warning'>warning</Button>
        </Stack>
        <Stack spacing = {3} direction = 'row'>
            <Button variant = 'outlined' color='primary'>Primary</Button>
        </Stack>
        <Stack spacing = {3} direction = 'row'>
            <Button variant = 'contained' color = 'warning' size='small'>Small A</Button>
            <Button variant = 'contained' color = 'success' size = 'medium'>Medium</Button>
            <Button variant = 'contained' color = 'error'  size = 'large'>Large</Button>
        </Stack>
        <Stack spacing = {2} direction = 'row'>
            <ButtonGroup orientation = 'vertical'>
                <Button variant = 'contained' color = 'primary'>Left</Button>
                <Button variant = 'contained' color='warning'>Center</Button>
                <Button variant = 'contained' color = 'primary'>Right</Button>
            </ButtonGroup>
        </Stack>
        <div>
            <Button variant = 'contained' color = 'error' startIcon = {<SendIcon/>}> Send </Button>
            <Button variant = 'contained' color = 'success' endIcon = {<SendIcon/>}>Send</Button>
        </div>
        <h1>Go to Live </h1>
        <IconButton color = 'success' size = 'small'  onClick={()=>alert('Md RUhul Amin')}>
            <SendIcon />
        </IconButton>
      </div>
    
  )
}

export default MuiButton