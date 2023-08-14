import { useEffect } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useInView } from 'react-intersection-observer'
import anime from 'animejs'
import theme from '@/theme'
import NextMuiLink from '@/components/NextMuiLink'

/* The code is defining a React functional component called `Variant3`. It is the third variant of
the ContentSection1 component. */
export default function Variant3 ({ blok }) {
  const [scrollRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      anime
        .timeline()
        .add({
          targets: '.content_section1-variant3--stagger',
          delay: anime.stagger(200),
          opacity: 1,
          easing: 'easeOutExpo'
        })
        .add(
          {
            targets: '.content_section1-variant3--square',
            top: 0,
            duration: 2000,
            easing: 'easeOutExpo'
          },
          '-=1000'
        )
        .add(
          {
            targets: '.content_section1-variant3--stagger2',
            delay: anime.stagger(200),
            opacity: 1,
            easing: 'easeOutExpo'
          },
          '-=1000'
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
        zIndex: 1
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          spacing={{ xs: 3, sm: 10 }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                position: 'relative',
                width: { xs: 275, sm: 350, md: 500 },
                height: { xs: 375, sm: 350, md: 500 }
              }}
            >
              <Box
                sx={{
                  overflow: 'hidden',
                  position: 'absolute',
                  borderRadius: 5,
                  width: 1,
                  height: 1
                }}
              >
                <Image
                  className='content_section1-variant3--stagger2'
                  src={blok.image.filename}
                  alt={blok.image.alt}
                  fill
                  sizes={`${theme.breakpoints.down('sm').split(' ')[1]} 90vw,${
                    theme.breakpoints.up('sm').split(' ')[1]
                  } 40vw`}
                  style={{ objectFit: 'cover', opacity: 0 }}
                />
              </Box>
              <Box
                sx={{
                  overflow: 'hidden',
                  position: 'absolute',
                  zIndex: -1,
                  top: -50,
                  right: { xs: -20, sm: -300 },
                  borderRadius: 5,
                  width: { xs: 275, sm: 500, md: 750 },
                  height: { xs: 275, sm: 350, md: 500 }
                }}
              >
                <Box
                  className='content_section1-variant3--square'
                  sx={{
                    position: 'absolute',
                    top: '-100%',
                    left: 0,
                    width: 1,
                    height: 1,
                    backgroundColor: 'secondary.main'
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack
              justifyContent='flex-start'
              alignItems='flex-start'
              spacing={3}
              sx={{ maxWidth: 400 }}
            >
              <Typography
                variant='overline'
                className='content_section1-variant3--stagger'
                sx={{ opacity: 0 }}
              >
                {blok.tagline}
              </Typography>
              <Typography
                variant='h4'
                component='h2'
                className='content_section1-variant3--stagger'
                sx={{ opacity: 0 }}
              >
                {blok.title}
              </Typography>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                className='content_section1-variant3--stagger'
                sx={{ opacity: 0 }}
              >
                {blok.subtitle}
              </Typography>
              {!!blok.ctaLinkText && (
                <NextMuiLink
                  href={blok.ctaLink.cached_url}
                  className='content_section1-variant3--stagger'
                  sx={{ opacity: 0 }}
                >
                  <Button variant='outlined' color='dark'>
                    {blok.ctaLinkText}
                  </Button>
                </NextMuiLink>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}
