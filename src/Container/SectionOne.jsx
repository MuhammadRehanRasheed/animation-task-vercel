import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

export default function SectionOne() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'end',
        textAlign: 'center',
        backgroundColor: '#E9FDFF',  
        height: '530px',             
        fontSize: '40px',            
      }}
    >
      <Typography sx={{fontSize: '40px', paddingBottom:'64px'}}>
        <b>"Our team is a blend of innovators and experts, dedicated to turning your vision into reality. We collaborate closely to deliver tailored solutions that drive success. Together, we're committed to pushing the boundaries of what's possible."</b>
      </Typography>
    </Box>
  )
}

