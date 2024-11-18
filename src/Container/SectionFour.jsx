import { ArrowOutward, } from '@mui/icons-material';
import { Box, Divider, Typography, Button } from '@mui/material';

export default function SectionFour() {
    return (
        <Box
            sx={{
                minHeight: '50vh',
                backgroundColor: '#3292A7',
                display: 'flex',
                padding: '40px',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Typography sx={{ fontSize: '96px', marginLeft: '10%', fontWeight: '700', color: 'white' }}>
                        WANT TO
                    </Typography>
                    <Typography sx={{ fontSize: '96px', marginLeft: '10%', fontWeight: '700', color: 'white' }}>
                        JOIN US?
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Divider sx={{ borderColor: 'white' }} />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography sx={{ fontSize: '24px', fontWeight: '600', padding: '10px', color: 'white' }}>
                            Brochure
                        </Typography>
                        <Button variant='text' sx={{ color: 'white' }} endIcon={<ArrowOutward />}>Learn More</Button>
                    </Box>
                    <Divider sx={{ borderColor: 'white' }} />
                </Box>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: '10%',
                }}
            >
                <img 
                    src="public\images.jpg"
                    alt="Example"
                    style={{ 
                        width: '563px',
                        height: '400.68px',
                        borderRadius: '40px',
                        objectFit: 'cover'
                    }}
                />
            </Box>
        </Box>
    );
}
