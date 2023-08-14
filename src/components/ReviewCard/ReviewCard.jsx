import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import StarIcon from '@mui/icons-material/Star'

export default function ReviewCard ({ review }) {
  return (
    <Stack
      component={Paper}
      justifyContent='center'
      alignItems='center'
      spacing={4}
      sx={{ paddingBlock: 4, paddingInline: 3 }}
    >
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ width: 1 }}
      >
        <Stack direction='row' justifyContent='center' alignItems='center'>
          <StarIcon sx={{ color: 'secondary.main' }} />
          <StarIcon sx={{ color: 'secondary.main' }} />
          <StarIcon sx={{ color: 'secondary.main' }} />
          <StarIcon sx={{ color: 'secondary.main' }} />
          <StarIcon sx={{ color: 'secondary.main' }} />
        </Stack>
        <Typography variant='caption' component='p'>
          - {review?.author}
        </Typography>
      </Stack>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <FormatQuoteIcon sx={{ marginRight: 2, width: 40, height: 40 }} />
        <Typography variant='body1'>{review?.content}</Typography>
      </Stack>
    </Stack>
  )
}
