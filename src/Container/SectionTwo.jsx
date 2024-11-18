import { Button, Typography, Divider } from '@mui/material';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2';

const navItems = ['Home', 'Services', 'Portfolio', 'Contact us', 'About us']

export default function SectionTwo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',    
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2} sx={{ width: '100%' }}>
        <Grid size={7} sx={{ paddingLeft: '5%', textAlign: 'center', display: 'flex', alignItems: 'end'}}>
          <img 
            src="public\images.jpg"
            alt="Example"
            style={{ width: '563px', height: '400.68px', borderRadius: '32px'}}
          />
        </Grid>
        <Grid size={5} sx={{ textAlign: 'left' }}>
          <Typography sx={{paddingTop: '120px', fontSize: '20px', fontWeight:'300'}}>
            At NotchX, our team is a diverse group of graphic designers, animators, web developers, and creative thinkers—all experts in their fields. Each member takes full responsibility for their projects, working in pairs to ensure every stage is handled with precision and creativity.
          </Typography>
          <Typography sx={{paddingTop: '42px', fontSize: '20px', fontWeight:'300'}}>
            These talents are shared with our production team, who bring every detail to life with passion and expertise. NotchX stands out as a creative agency that seamlessly integrates design and execution, ensuring meticulous attention to every aspect of our work.
          </Typography>
          <Typography sx={{paddingTop: '80px', paddingBottom:'100px', fontSize: '28px', fontWeight:'300'}}>
            Our team's collaboration and unified approach enable NotchX to deliver exceptional service, turning your vision into reality with unmatched quality.        
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 10, marginBottom: 10 }}>
        <Grid size={12} sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                size='large' 
                key={item} 
                sx={{ 
                  color: '#000', 
                  width: '167px',
                  height: '46px',
                  textTransform: 'capitalize',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0%',
                    height: '100%',
                    backgroundColor: '#65D9E6',
                    transition: 'width 0.3s ease',
                    zIndex: -1,
                  },
                  '&:hover': {
                    width: '167px',
                    height: '46px',
                    padding: '15px 30px',
                    gap: '10px',
                    borderRadius: '20px',
                    color: '#000',
                    backgroundColor: '#65D9E6',
                    '&::before': {
                      width: '100%',
                    }
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Grid>
          <Divider sx={{margin: 'auto', width: '80%'}}/>
      </Grid>
      <Grid container sx={{ width: '100%' }}>
        <Grid size={12} sx={{ textAlign: 'center' }}>
            <Typography fontWeight={700} fontSize={40} marginTop={'60px'}>Our Creative Chiefs </Typography>
            <Typography fontWeight={300} fontSize={15} textAlign={'center'} marginTop={'60px'} marginLeft={'37%'} marginRight={'36%'}>Our creative chiefs excel in every aspect of design and project execution, from crafting unique identities to managing timelines and coordinating teams. Their expertise and communication skills ensure a seamless, personalized project experience that brings your vision to life. </Typography>  
        </Grid>
      </Grid>
    </Box>
  )
}


