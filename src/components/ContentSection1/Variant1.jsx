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
import NextMuiLink from '@/components/NextMuiLink'
import theme from '@/theme'

/* The code is defining a React functional component called `Variant1`. It is the first variant of
the ContentSection1 component. */
export default function Variant1 ({ blok }) {
  const [scrollRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      anime
        .timeline()
        .add({
          targets: '.content_section1-variant1--stagger',
          delay: anime.stagger(200),
          opacity: 1,
          easing: 'easeOutExpo'
        })
        .add(
          {
            targets: '.content_section1-variant1--width',
            width: '80%',
            duration: 2000,
            easing: 'easeOutExpo'
          },
          '-=1000'
        )
        .add(
          {
            targets: '.content_section1-variant1--stagger2',
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
        zIndex: 1,
        minHeight: '100vh',
        paddingBlock: 20
      }}
    >
      <Container maxWidth='md'>
        <Grid
          container
          justifyContent='flex-start'
          alignItems='flex-start'
          spacing={5}
          sx={{
            position: 'relative'
          }}
        >
          <Box
            className='content_section1-variant1--width'
            sx={{
              position: 'absolute',
              borderRadius: 2,
              width: 0,
              height: '80%',
              backgroundColor: 'secondary.main'
            }}
          />
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                overflow: 'hidden',
                position: 'relative',
                top: 0,
                left: 0,
                borderRadius: 2,
                width: 300,
                height: 300
              }}
            >
              <Image
                className='content_section1-variant1--stagger2'
                src={blok.image.filename}
                alt={blok.image.alt}
                fill
                sizes={`${theme.breakpoints.down('sm').split(' ')[1]} 90vw,${
                  theme.breakpoints.up('sm').split(' ')[1]
                } 300px`}
                style={{ objectFit: 'cover', opacity: 0 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack
              justifyContent='flex-start'
              alignItems='flex-start'
              spacing={3}
              sx={{
                maxWidth: 300,
                height: 1,
                '& > *': {
                  position: 'relative'
                }
              }}
            >
              <Typography
                className='content_section1-variant1--stagger'
                variant='overline'
              >
                {blok.tagline}
              </Typography>
              <Typography
                className='content_section1-variant1--stagger'
                variant='h4'
                component='h2'
              >
                {blok.title}
              </Typography>
              {!!blok.subtitle && (
                <Typography
                  className='content_section1-variant1--stagger'
                  variant='subtitle1'
                  color='text.secondary'
                >
                  {blok.subtitle}
                </Typography>
              )}
              {!!blok.ctaLinkText && (
                <NextMuiLink href={blok.ctaLink.cached_url}>
                  <Button
                    className='content_section1-variant1--stagger'
                    variant='outlined'
                    color='dark'
                  >
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
