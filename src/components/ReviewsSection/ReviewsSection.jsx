import { storyblokEditable } from '@storyblok/react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ReviewCard from '@/components/ReviewCard'
import Slider from '@/components/Slider'

export default function ReviewsSection ({ blok }) {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      {...storyblokEditable(blok)}
    >
      <Container maxWidth='sm'>
        <Stack justifyContent='center' alignItems='center' spacing={3}>
          <Typography variant='overline' component='p' align='center'>
            {blok.tagline}
          </Typography>
          <Typography variant='h4' component='h3' align='center'>
            {blok.title}
          </Typography>
          <Typography variant='body1' component='p' align='center'>
            {blok.subtitle}
          </Typography>
          {!!blok.reviews[0]._uid && (
            <Slider
              slides={blok.reviews.map(review => {
                return <ReviewCard review={review} key={review._uid} />
              })}
            />
          )}
        </Stack>
      </Container>
    </Stack>
  )
}
