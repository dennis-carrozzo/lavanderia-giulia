import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function ServiceCard ({ blok }) {
  return (
    <Paper elevation={3} sx={{ paddingBlock: 4, paddingInline: 2 }}>
      <Grid
        container
        spacing={{ xs: 1, sm: 8 }}
        justifyContent='flex-start'
        alignItems='flex-start'
      >
        <Grid item xs={12} sm={1}>
          <Stack
            justifyContent='center'
            alignItems='center'
            sx={{
              borderRadius: '50%',
              height: 35,
              width: 35,
              backgroundColor: blok.iconBgColor,
              color: 'light.main'
            }}
          >
            {blok.icon || null}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography variant='h6' component='h3'>
            {blok.title}
          </Typography>
          <Typography variant='body2' component='p'>
            {blok.snippet}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
