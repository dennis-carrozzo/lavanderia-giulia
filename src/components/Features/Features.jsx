import { useEffect } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import NextMuiLink from '@/components/NextMuiLink'
import ServiceCard from '@/components/ServiceCard'
import { useInView } from 'react-intersection-observer'
import anime from 'animejs'
import theme from '@/theme'

// TODO: move away hard coded data
export default function Features ({ blok }) {
  const [scrollRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  useEffect(() => {
    if (inView) {
      anime.timeline().add({
        targets: '.features--stagger',
        delay: anime.stagger(500),
        opacity: 1
      })
    }
  }, [inView])

  return (
    <>
      {/* Top */}
      <Stack justifyContent='center' alignItems='center'>
        <Container
          maxWidth='lg'
          sx={{
            position: 'relative',
            zIndex: 1,
            marginBottom: { xs: 20, sm: 5 },
            marginTop: { xs: 20, sm: 0 }
          }}
        >
          {/* Image 1 */}
          <Box
            sx={{
              position: 'absolute',
              zIndex: -1,
              top: { xs: -235, sm: -50 },
              left: { xs: '50%', sm: 0 },
              transform: { xs: 'translateX(-50%)', sm: 'unset' },
              width: { xs: 250, sm: 300 },
              height: { xs: 250, sm: 300 }
            }}
          >
            <Image
              src={blok.image.filename}
              alt={blok.image.alt}
              fill
              sizes={`${theme.breakpoints.down('sm').split(' ')[1]} 40vw,${
                theme.breakpoints.up('xs').split(' ')[1]
              } 500px`}
              style={{ objectFit: 'cover', opacity: 0.7 }}
            />
          </Box>
          {/* Image 2 */}
          <Box
            sx={{
              position: 'absolute',
              zIndex: -1,
              bottom: { xs: -175, sm: -125 },
              right: 0,
              width: { xs: 200, sm: 250 },
              height: { xs: 200, sm: 250 }
            }}
          >
            <Image
              src={blok.image2.filename}
              alt={blok.image2.alt}
              fill
              sizes={`${theme.breakpoints.down('sm').split(' ')[1]} 40vw,${
                theme.breakpoints.up('xs').split(' ')[1]
              } 500px`}
              style={{ objectFit: 'cover', opacity: 0.7 }}
            />
          </Box>
          <Stack justifyContent='center' alignItems='center' spacing={3}>
            <Typography
              variant='overline'
              component='p'
              color='text.secondary'
              align='center'
              sx={{ maxWidth: 400 }}
            >
              {blok.tagline}
            </Typography>
            <Typography
              variant='h4'
              component='h3'
              align='center'
              sx={{ maxWidth: 400 }}
            >
              {blok.title}
            </Typography>
            <Typography
              variant='subtitle1'
              component='p'
              align='center'
              sx={{ maxWidth: 400 }}
            >
              {blok.subtitle}
            </Typography>
          </Stack>
        </Container>
      </Stack>
      {/* Bottom */}
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{ backgroundColor: 'primary.light', paddingBlock: 10 }}
      >
        <Container maxWidth='lg'>
          <Grid
            container
            justifyContent='flex-start'
            alignItems='center'
            spacing={3}
            sx={{ position: 'relative', zIndex: 1 }}
          >
            <Grid item xs={12} sm={8} md={6} ref={scrollRef}>
              <Stack spacing={3}>
                <Typography variant='h4' component='h3'>
                  {blok.title2}
                </Typography>
                <Typography variant='subtitle1' component='p'>
                  {blok.subtitle2}
                </Typography>
                <Box
                  sx={{ opacity: 0, height: 1 }}
                  className='features--stagger'
                >
                  <ServiceCard
                    blok={{
                      variant: 'variant2',
                      title: 'Campionario Aziende di Vestiario',
                      snippet:
                        "Comprendiamo l'importanza di curare i campioni di abbigliamento. Il nostro servizio specializzato di lavaggio e cura garantirà che siano mantenuti in condizioni ottimali, in modo da impressionare i vostri clienti.",
                      iconBgColor: 'primary.main'
                    }}
                  />
                </Box>
                <Box
                  sx={{ opacity: 0, height: 1 }}
                  className='features--stagger'
                >
                  <ServiceCard
                    blok={{
                      variant: 'variant2',
                      title: 'Uniformi Aziendali',
                      snippet:
                        'Offriamo un servizio di lavaggio e stiratura completo per mantenere le uniformi in perfette condizioni. garantendo che i dipendenti si presentino sempre professionali e ben curati.',
                      iconBgColor: 'secondary.light'
                    }}
                  />
                </Box>
                <Box
                  sx={{ opacity: 0, height: 1 }}
                  className='features--stagger'
                >
                  <ServiceCard
                    blok={{
                      variant: 'variant2',
                      title: 'Lavaggio Lenzuola e Tovagliato',
                      snippet:
                        "Garantiamo il lavaggio accurato e igienico delle lenzuola e del tovagliato per hotel, ristoranti e altre attività commerciali. I tessuti saranno trattati con cura e restituiti freschi e pronti per l'uso.",
                      iconBgColor: 'light.dark'
                    }}
                  />
                </Box>
                <Stack
                  justifyContent='center'
                  alignItems='center'
                  sx={{ width: 1 }}
                >
                  <NextMuiLink
                    href={blok.ctaLink.cached_url}
                    sx={{ width: 'fit-content' }}
                  >
                    <Button variant='contained' sx={{ color: 'light.main' }}>
                      {blok.ctaLinkText}
                    </Button>
                  </NextMuiLink>
                </Stack>
              </Stack>
            </Grid>
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                position: 'absolute',
                zIndex: -1,
                bottom: -200,
                right: 0,
                width: 750,
                height: 750
              }}
            >
              <Image
                src={blok.image3.filename}
                alt={blok.image3.alt}
                fill
                style={{ objectFit: 'center' }}
              />
            </Box>
          </Grid>
        </Container>
      </Stack>
    </>
  )
}
