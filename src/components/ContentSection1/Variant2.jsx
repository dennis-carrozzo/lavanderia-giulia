import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Parallax } from 'react-parallax'

/* The code is defining a React functional component called `Variant2`. It is the second variant of
the ContentSection1 component. */
export default function Variant2 ({ blok }) {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      sx={{
        position: 'relative',
        zIndex: 1,
        height: '85vh',
        backgroundColor: 'primary.light',
        marginBottom: 30
      }}
    >
      <Parallax
        strength={300}
        bgImage={blok.image.filename}
        style={{ position: 'absolute' }}
      >
        <Box
          sx={{
            width: '100vw',
            height: '85vh',
            maxWidth: 'xl'
          }}
        />
      </Parallax>
      <Container maxWidth='md'>
        <Grid container justifyContent='flex-start' alignItems='center'>
          <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
            <Stack
              component={Paper}
              elevation={3}
              justifyContent='flex-start'
              alignItems='flex-start'
              spacing={2}
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: 'secondary.light',
                paddingBlock: 6,
                paddingInline: 2,
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  borderRadius: '50%',
                  width: 25,
                  height: 25,
                  backgroundColor: 'light.main'
                }
              }}
            >
              <Typography
                variant='overline'
                component='p'
                color='light.main'
                align='left'
              >
                {blok.tagline}
              </Typography>
              <Typography variant='h4' component='h3' align='left'>
                {blok.title}
              </Typography>
              <Typography variant='subtitle1' component='p' align='left'>
                {blok.subtitle}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}
