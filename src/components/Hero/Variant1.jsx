import { useEffect } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useInView } from 'react-intersection-observer'
import anime from 'animejs'
import theme from '@/theme'

/* The code is defining a React functional component called "Variant1". It is a variant of the Hero
Component */
export default function Variant1 ({ blok }) {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [scrollRef, inView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      anime
        .timeline()
        .add({
          targets: '.hero-variant1--stagger',
          delay: anime.stagger(200),
          opacity: 1
        })
        .add(
          {
            targets: '.hero-variant1--background',
            top: 0,
            duration: 2000,
            easing: 'easeOutExpo'
          },
          '-=500'
        )
        .add(
          {
            targets: '.hero-variant1--width',
            width: [0, 600],
            duration: 750,
            easing: 'linear'
          },
          '-=2000'
        )
    }
  }, [inView])

  return (
    <Stack
      ref={scrollRef}
      justifyContent='center'
      alignItems='center'
      sx={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh'
      }}
    >
      <Box
        className='hero-variant1--background'
        sx={{
          position: 'absolute',
          zIndex: -1,
          top: '-100%',
          left: 0,
          height: 1,
          width: 1,
          backgroundColor: 'primary.light'
        }}
      />
      <Container maxWidth='md'>
        <Grid
          container
          justifyContent='center'
          alignItems={{ xs: 'end', sm: 'center' }}
          sx={{ width: 1, height: { xs: '80vh', sm: 'fit-content' } }}
        >
          {/* Headings */}
          <Grid item xs={12} sm={6} sx={{ position: 'relative', zIndex: 1 }}>
            <Stack
              spacing={3}
              sx={{
                marginTop: { xs: 10, sm: 0 },
                '& > *': {
                  opacity: 0
                }
              }}
            >
              <Typography
                variant={isSmallScreen ? 'h4' : 'h2'}
                component='h1'
                className='hero-variant1--stagger'
              >
                {blok.title}
              </Typography>
              <Typography
                variant='h5'
                component='p'
                className='hero-variant1--stagger'
              >
                {blok.subtitle}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              position: 'relative',
              height: '100vh'
            }}
          >
            <Box
              className='hero-variant1--width'
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: { xs: 200, sm: 400 },
                backgroundColor: 'light.main'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                right: { xs: 0, sm: '-100%' },
                bottom: { sm: 0 },
                top: { xs: 0, sm: 'unset' },
                width: { xs: 300, sm: 800 },
                height: { xs: 200, sm: 550 }
              }}
            >
              <Image
                src={blok.image.filename}
                alt={blok.image.alt}
                fill
                style={{ objectFit: 'cover', opacity: 0 }}
                className='hero-variant1--stagger'
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}
