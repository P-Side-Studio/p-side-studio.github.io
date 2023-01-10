import { Box, Card, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, Typography, Button, useTheme } from "@mui/material"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export function Services() {
  const productionBullets = [
    'Need original music for a commercial, movie or video game?',
    'Need to shine musical light on the incredible lyrics that you wrote?',
    'Looking for a tailor-made beat to bump with those flaming hot bars?',
  ]
  const recordingBullets = [
    'Trying to lay down all the tracks for your next single without breaking the bank?',
    'Tired of feeling rushed when in the studio, knowing every extra minute costs you precious funds?',
  ]
  const mixingBullets = [
    'Having trouble nailing that professionnal sound?',
    'Need help polishing off some rough spots?',
  ]
  const theme = useTheme()
  return (
    <Box mt={10} display='flex' flexDirection='column' gap={20}>
      {/* PRODUCTION */}
      <Card sx={{ maxWidth: { xs: 800, md: 800, lg: "100%" }, borderRadius: 5, display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography mb={2} component="div" variant="h3">
              Production
            </Typography>
            <List sx={{ mb: 2 }}>
              {productionBullets.map((bullet) =>
                <ListItem sx={{ pl: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <MusicNoteIcon />
                  </ListItemIcon>
                  <Typography variant="h6" color="text.secondary" component="div">
                    {bullet}
                  </Typography>
                </ListItem>
              )}
            </List>
            <Typography variant="body1" mb={2}>
              Look no further, <b>P-Side Studio</b> has got you covered. We have countless years of experience in a plethora of different genres. We will listen to your needs and help amplify the impact of your creative ambitions through our meticulous production techniques.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="/portfolio" target="_blank" color='secondary' size="large">Listen to portfolio</Button>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ display: { xs: "none", md: "none", lg: "block" }, width: 400 }}
          image="/images/guitars.jpg"
          alt="Live from space album cover"
        />
      </Card>
      {/* RECORDING */}
      <Card sx={{ maxWidth: { xs: 800, md: 800, lg: "100%" }, borderRadius: 5, display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ display: { xs: "none", md: "none", lg: "block" }, width: 400 }}
          image="/images/microphone.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography mb={2} component="div" variant="h3">
              Recording
            </Typography>
            <List sx={{ mb: 2 }}>
              {recordingBullets.map((bullet) =>
                <ListItem sx={{ pl: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <MusicNoteIcon />
                  </ListItemIcon>
                  <Typography variant="h6" color="text.secondary" component="div">
                    {bullet}
                  </Typography>
                </ListItem>
              )}
            </List>
            <Typography variant="body1" mb={2}>
              Over at <b>P-Side Studio</b>, you won't need to worry about doing things quickly. Instead, worry about doing things right.
              With our flat rate, recording can take place throughout the span of multiple sessions at no extra cost.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="/portfolio" target="_blank" color='secondary' size="large">Listen to portfolio</Button>
          </CardActions>
        </Box>
      </Card>
      {/* MIX MASTER */}
      <Card sx={{ maxWidth: { xs: 800, md: 800, lg: "100%" }, borderRadius: 5, display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography mb={2} component="div" variant="h3">
              Mixing / Mastering
            </Typography>
            <List sx={{ mb: 2 }}>
              {mixingBullets.map((bullet) =>
                <ListItem sx={{ pl: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <MusicNoteIcon />
                  </ListItemIcon>
                  <Typography variant="h6" color="text.secondary" component="div">
                    {bullet}
                  </Typography>
                </ListItem>
              )}
            </List>
            <Typography variant="body1" mb={2}>
            With our trained ear and unmatched attention to detail, <b>P-Side Studio</b> is sure to make your voice shine, your strings radiate, and your bass SLAP.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="/portfolio" target="_blank" color='secondary' size="large">Listen to portfolio</Button>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ display: { xs: "none", md: "none", lg: "block" }, width: 400 }}
          image="/images/piano.jpg"
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  )
}