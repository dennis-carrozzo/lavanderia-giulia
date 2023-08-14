import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import DryCleaningIcon from '@mui/icons-material/DryCleaning'
import IronIcon from '@mui/icons-material/Iron'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import { useInView } from 'react-intersection-observer'
import anime from 'animejs'
import ServiceCard from '@/components/ServiceCard'
import NextMuiLink from '@/components/NextMuiLink'

export default function Variant1 ({ blok }) {
  const [scrollRef, inView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      anime.timeline().add(
        {
          targets: '.featured_services-variant1--stagger',
          delay: anime.stagger(200),
          opacity: 1
        },
        '+=1000'
      )
    }
  }, [inView])

  return (
    <Container maxWidth='lg'>
      <Stack
        justifyContent='center'
        alignItems='center'
        spacing={3}
        sx={{ width: 1 }}
      >
        <Typography
          align='center'
          variant='overline'
          component='p'
          sx={{
            borderTopWidth: 1,
            borderTopStyle: 'solid',
            borderTopColor: 'text-secondary',
            maxWidth: 'sm',
            color: 'text.secondary'
          }}
        >
          {blok.tagline}
        </Typography>
        <Typography
          align='center'
          variant='h4'
          component='h2'
          sx={{ maxWidth: 'sm' }}
        >
          {blok.title}
        </Typography>
        <Typography
          align='center'
          variant='subtitle1'
          component='p'
          sx={{ maxWidth: 'md' }}
        >
          {blok.subtitle}
        </Typography>
        <Grid
          container
          justifyContent='center'
          alignitems='center'
          spacing={3}
          ref={scrollRef}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              paddingInline: { xs: '0 !important', sm: '10px !important' }
            }}
          >
            <Box
              sx={{ opacity: 0, height: 1 }}
              className='featured_services-variant1--stagger'
            >
              <ServiceCard
                blok={{
                  variant: 'variant1',
                  title: 'Lavaggio',
                  snippet:
                    'Dai ai tuoi vestiti una nuova vita con il nostro servizio di lavaggio professionale. Tessuti puliti e profumo di freschezza garantiti.',
                  icon: <IronIcon sx={{ width: 40, height: 40 }} />,
                  iconBgColor: 'secondary.dark'
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              paddingInline: { xs: '0 !important', sm: '10px !important' }
            }}
          >
            <Box
              sx={{ opacity: 0, height: 1 }}
              className='featured_services-variant1--stagger'
            >
              <ServiceCard
                blok={{
                  variant: 'variant1',
                  title: 'Stiro',
                  snippet:
                    'renderemo i tuoi abiti perfettamente lisci e pronti da indossare. Ogni piega sarà curata con attenzione per un risultato impeccabile.',
                  icon: (
                    <LocalLaundryServiceIcon sx={{ width: 40, height: 40 }} />
                  ),
                  iconBgColor: 'secondary.main'
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              paddingInline: { xs: '0 !important', sm: '10px !important' }
            }}
          >
            <Box
              sx={{ opacity: 0, height: 1 }}
              className='featured_services-variant1--stagger'
            >
              <ServiceCard
                blok={{
                  variant: 'variant1',
                  title: 'Lavaggio a Secco',
                  snippet:
                    'I tessuti delicati e i capi speciali riceveranno un trattamento di lavaggio a secco delicato e accurato. Garantiamo la massima cura per i tuoi indumenti.',
                  icon: <DryCleaningIcon sx={{ width: 40, height: 40 }} />,
                  iconBgColor: 'secondary.light'
                }}
              />
            </Box>
          </Grid>
        </Grid>
        {!!blok.ctaText && (
          <Typography
            variant='h4'
            component='p'
            align='center'
            sx={{ paddingTop: 5, maxWidth: 'sm' }}
          >
            {blok.ctaText}
          </Typography>
        )}
        {!!blok.ctaLinkText && (
          <NextMuiLink href={blok.ctaLink.cached_url}>
            <Button variant='contained' sx={{ color: 'light.main' }}>
              {blok.ctaLinkText}
            </Button>
          </NextMuiLink>
        )}
      </Stack>
    </Container>
  )
}
