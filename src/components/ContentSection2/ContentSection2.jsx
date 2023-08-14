import { useEffect, useRef } from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { render } from 'storyblok-rich-text-react-renderer'
import { useInView } from 'react-intersection-observer'
import anime from 'animejs'
import NextMuiLink from '@/components/NextMuiLink'

export default function ContentSection2 ({ blok }) {
  const squareRef = useRef()
  const [scrollRef, inView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      anime
        .timeline()
        .add({
          targets: squareRef.current,
          top: 0,
          easing: 'linear',
          duration: 1000
        })
        .add({
          targets: '.content_section2--stagger',
          delay: anime.stagger(200),
          opacity: 1
        })
    }
  }, [inView])

  return (
    <Stack
      ref={scrollRef}
      justifyContent='center'
      alignItems='center'
      {...storyblokEditable(blok)}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          justifyContent='center'
          alignItems='flex-start'
          spacing={5}
        >
          <Grid item xs={12} sm={5} md={6}>
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                maxWidth: 300,
                paddingBlock: 3,
                paddingInline: 2
              }}
            >
              <Box
                sx={{
                  overflow: 'hidden',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                  borderRadius: 3,
                  width: 1,
                  height: 1
                }}
              >
                <Box
                  ref={squareRef}
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
              <Typography
                variant='overline'
                component='p'
                className='content_section2--stagger'
                sx={{ opacity: 0 }}
              >
                {blok.tagline}
              </Typography>
              <Typography
                variant='h6'
                component='p'
                className='content_section2--stagger'
                sx={{ opacity: 0 }}
              >
                {blok.title}
              </Typography>
              {/* Image */}
              <Box
                className='content_section2--stagger'
                sx={{
                  opacity: 0,
                  display: { xs: 'none', sm: 'block' },
                  overflow: 'hidden',
                  position: 'absolute',
                  zIndex: -2,
                  left: { sm: '-10%', md: '30%' },
                  bottom: 0,
                  transform: { sm: 'translateY(90%)' },
                  borderRadius: 3,
                  width: { sm: 250, md: 350 },
                  height: { md: 500 }
                }}
              >
                <Image
                  src={blok.image.filename}
                  alt={blok.image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Box
              className='content_section2--stagger'
              sx={{ paddingTop: { sm: 10 }, opacity: 0 }}
            >
              {render(blok.content)}
            </Box>
          </Grid>
          <Stack
            component={Grid}
            item
            xs={12}
            justifyContent='center'
            alignItems='center'
          >
            {!!blok.ctaLinkText && (
              <NextMuiLink href={blok.ctaLink.cached_url}>
                <Button variant='contained' size='large'>
                  {blok.ctaLinkText}
                </Button>
              </NextMuiLink>
            )}
          </Stack>
        </Grid>
      </Container>
    </Stack>
  )
}
