import { storyblokEditable } from '@storyblok/react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function PricingSection ({ blok }) {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      sx={{ paddingBlock: 5, backgroundColor: 'primary.light' }}
      {...storyblokEditable(blok)}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          justifyContent='flex-start'
          alignItems='center'
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography
              align='center'
              variant='h4'
              component='h2'
              sx={{ paddingBottom: 3 }}
            >
              {blok.title}
            </Typography>
          </Grid>
          {!!blok.listing[0] &&
            blok.listing.map(item => {
              return (
                <Grid item xs={12} sm={6} key={item._uid}>
                  <PricingCard title={item.title} price={item.price} />
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </Stack>
  )
}

function PricingCard ({ title, price }) {
  return (
    <Stack
      component={Paper}
      elevation={5}
      justifyContent='space-between'
      alignItems='center'
      direction='row'
      sx={{
        borderRadius: 3,
        paddingBlock: 2,
        paddingInline: 2,
        backgroundColor: 'light.main'
      }}
    >
      <Typography variant='subtitle1' component='p'>
        {title}
      </Typography>
      <Typography variant='subtitle2' component='p'>
        €{price}
      </Typography>
    </Stack>
  )
}
