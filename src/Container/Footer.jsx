import { Box, Container, Typography, Link, TextField, Button, Stack, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#000000' }}>
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            pt: 4,
            pb: 4,
          }}
        >
          <Typography variant='h6' sx={{ color: 'white' }}>Logo</Typography>
        </Box>

        <Divider sx={{ borderColor: 'white' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            py: 8,
            gap: 4,
          }}
        >
          <Box sx={{ flex: '1' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
              Reach Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white' }}>
                <PhoneIcon />
                <Typography>+1012 3456 789</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white' }}>
                <EmailIcon />
                <Typography>demo@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: 'white' }}>
                <LocationOnIcon />
                <Typography>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ flex: '1' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="#" sx={{ color: 'white' }} underline="hover">About</Link>
              <Link href="#" sx={{ color: 'white' }} underline="hover">Contact</Link>
              <Link href="#" sx={{ color: 'white' }} underline="hover">Blogs</Link>
              <Link href="#" sx={{ color: 'white' }} underline="hover">Refund Policy</Link>
            </Stack>
          </Box>

          <Box sx={{ flex: '1' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link href="#" sx={{ color: 'white' }} underline="hover">Privacy Policy</Link>
              <Link href="#" sx={{ color: 'white' }} underline="hover">Terms & Services</Link>
              <Link href="#" sx={{ color: 'white' }} underline="hover">Terms of Use</Link>
            </Stack>
          </Box>

          <Box sx={{ flex: '1' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="#" sx={{ color: 'white' }} underline="hover">Techlabz Keybox</Link>
              <Link href="#" sx={{ color: 'white' }} underline="hover">Downloads</Link>
              <Link href="#" sx={{ color: 'white' }} underline="hover">Forum</Link>
            </Stack>
          </Box>

          <Box sx={{ 
            flex: '1.2',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            paddingTop: '48px'
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                fontWeight: 'bold', 
                color: 'white',
                textAlign: 'center'
              }}
            >
              Join Our Newsletter
            </Typography>
            <Box sx={{
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto',
            }}>
              <Box sx={{ 
                position: 'relative',
                mb: 2,
                width: '100%'
              }}>
                <TextField
                  placeholder="Your email address"
                  variant="outlined"
                  fullWidth
                  size="small"
                  sx={{ 
                    backgroundColor: '#1A1A1A',
                    borderRadius: '4px',
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      paddingRight: '140px',
                      '& fieldset': {
                        borderColor: '#333333',
                      },
                      '&:hover fieldset': {
                        borderColor: '#444444',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#555555',
                      },
                    },
                    '& input::placeholder': {
                      color: '#888888',
                      opacity: 1,
                    },
                  }}
                />
                <Button 
                  variant="contained" 
                  sx={{
                    position: 'absolute',
                    right: '3px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: '#1A1A1A',
                    color: 'white',
                    border: '1px solid #333333',
                    height: 'calc(100% - 6px)',
                    minWidth: '120px',
                    '&:hover': {
                      bgcolor: '#333333',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                * Will send you weekly updates for your better tool management.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}