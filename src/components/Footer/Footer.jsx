import { Fragment } from 'react'
import { StoryblokComponent } from '@storyblok/react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import NextMuiLink from '@/components/NextMuiLink'

/**
 * The above function is a React component that renders a footer
 */
export default function Footer ({ blok }) {
  const generateWhatsappMessage = (phone, message) => {
    const uriEncodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phone}?text=${uriEncodedMessage}`
  }

  return (
    <Stack
      component='footer'
      justifyContent='center'
      alignItems='center'
      spacing={1}
      sx={{
        position: 'relative',
        backgroundColor: 'dark.main',
        padding: 6,
        color: 'light.main'
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={3} justifyContent='center' alignItems='center'>
          {/* Navigation */}
          <Grid item xs={12} md={7}>
            <Stack
              justifyContent={{ xs: 'flex-start', md: 'center' }}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              spacing={3}
              direction={{ md: 'row' }}
            >
              {!!blok?.FooterMenu &&
                blok.FooterMenu.map((link, i, arr) => {
                  return (
                    <Fragment key={link._uid}>
                      <StoryblokComponent
                        blok={link}
                        sx={{ color: 'light.main', textDecoration: 'none' }}
                      />
                      {i !== arr.length - 1 && (
                        <Divider
                          flexItem
                          orientation='vertical'
                          sx={{ backgroundColor: 'light.main' }}
                        />
                      )}
                    </Fragment>
                  )
                })}
            </Stack>
          </Grid>
          {/* Contacts */}
          <Divider
            flexItem
            orientation='vertical'
            sx={{ backgroundColor: 'light.main' }}
          />
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <Box>
                <Typography variant='h6'>
                  {blok.FooterContent[0].title}
                </Typography>
                <Typography variant='subtitle2' component='p'>
                  {blok.FooterContent[0].headline}
                </Typography>
              </Box>
              <Typography variant='caption' component='p'>
                {blok.FooterContent[0].address}
              </Typography>
              <Typography variant='caption' component='p'>
                {blok.FooterContent[0].hours}
              </Typography>
              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={2}
              >
                <NextMuiLink
                  target='_blank'
                  href={generateWhatsappMessage(
                    blok.phone,
                    blok.whatsapp_message
                  )}
                >
                  <WhatsAppIcon />
                </NextMuiLink>
                <NextMuiLink target='_blank' href={`tel:${blok.phone}`}>
                  <LocalPhoneIcon />
                </NextMuiLink>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}
