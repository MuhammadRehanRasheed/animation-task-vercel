import { useReducer } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const images = [
  {
    title: "Image 1",
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Image 2",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Image 3",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Image 4",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Image 5",
    url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop"
  }
];

const initialState = {
  activeIndex: 0
};

const carouselReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        activeIndex: (state.activeIndex + 1) % images.length
      };
    case 'PREV':
      return {
        ...state,
        activeIndex: state.activeIndex === 0 ? images.length - 1 : state.activeIndex - 1
      };
    case 'SET_INDEX':
      return {
        ...state,
        activeIndex: action.payload
      };
    default:
      return state;
  }
};

export default function SectionThree() {
  const [state, dispatch] = useReducer(carouselReducer, initialState);

  const getImageIndex = (position) => {
    switch (position) {
      case 'farLeft':
        return (state.activeIndex - 2 + images.length) % images.length;
      case 'left':
        return (state.activeIndex - 1 + images.length) % images.length;
      case 'right':
        return (state.activeIndex + 1) % images.length;
      case 'farRight':
        return (state.activeIndex + 2) % images.length;
      default:
        return state.activeIndex;
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '700px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0px',
            transform: 'perspective(1000px)',
            transformStyle: 'preserve-3d',
          }}
        >
          <Box
            component="img"
            src={images[getImageIndex('farLeft')].url}
            sx={{
              width: '350px',
              height: '500px',
              objectFit: 'cover',
              borderRadius: '0px',
              transform: 'perspective(1000px) rotateY(40deg) translateX(250px) translateZ(-200px)',
              position: 'relative',
              zIndex: 0,
            }}
          />

          <Box
            component="img"
            src={images[getImageIndex('left')].url}
            sx={{
              width: '350px',
              height: '500px',
              borderRadius: '0px',
              transform: 'perspective(1000px) rotateY(30deg) translateX(100px) translateZ(-100px)',
              position: 'relative',
              zIndex: 1,
              marginLeft: '-10px',
            }}
          />

          <Box
            component="img"
            src={images[state.activeIndex].url}
            sx={{
              width: '350px',
              height: '500px',
              objectFit: 'cover',
              borderRadius: '0px',
              transform: 'perspective(1000px) translateZ(0)',
              position: 'relative',
              zIndex: 2,
              marginLeft: '-5px',
              marginRight: '-5px',
            }}
          />

          <Box
            component="img"
            src={images[getImageIndex('right')].url}
            sx={{
              width: '350px',
              height: '500px',
              objectFit: 'cover',
              borderRadius: '0px',
              transform: 'perspective(1000px) rotateY(-30deg) translateX(-100px) translateZ(-100px)',
              position: 'relative',
              zIndex: 1,
              marginRight: '-10px',
            }}
          />

          <Box
            component="img"
            src={images[getImageIndex('farRight')].url}
            sx={{
              width: '350px',
              height: '500px',
              objectFit: 'cover',
              borderRadius: '0px',
              transform: 'perspective(1000px) rotateY(-40deg) translateX(-250px) translateZ(-200px)',
              position: 'relative',
              zIndex: 0,
            }}
          />
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px', // Space between elements
        paddingBottom: '100px'
      }}>
        {/* Left Arrow */}
        <IconButton
          onClick={() => dispatch({ type: 'PREV' })}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'black',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: '2rem' }} />
        </IconButton>

        {/* Pagination Dots */}
        <Box sx={{
          display: 'flex',
          gap: '8px', // Space between dots
          alignItems: 'center',
        }}>
          {images.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: index === state.activeIndex ? '#333333' : '#EFEFEF',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.2)',
                }
              }}
              onClick={() => dispatch({ type: 'SET_INDEX', payload: index })}
            />
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => dispatch({ type: 'NEXT' })}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'black',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: '2rem' }} />
        </IconButton>
      </Box>
    </>
  );
}
