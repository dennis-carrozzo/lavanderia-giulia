import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function ServiceCard ({ blok }) {
  return (
    <Stack
      component={Paper}
      elevation={3}
      spacing={1}
      sx={{ maxWidth: 'sm', height: 1, paddingBlock: 4, paddingInline: 2 }}
    >
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{
          borderRadius: '50%',
          height: 70,
          width: 70,
          backgroundColor: blok.iconBgColor,
          color: 'light.main'
        }}
      >
        {blok.icon}
      </Stack>
      <Typography variant='h6' component='h3'>
        {blok.title}
      </Typography>
      <Typography variant='body1' component='p'>
        {blok.snippet}
      </Typography>
    </Stack>
  )
}
