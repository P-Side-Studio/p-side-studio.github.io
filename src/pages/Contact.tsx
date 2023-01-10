import { Box, Container, IconButton, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const contactEmail = 'studio@pside.ca'

export function Contact() {
  return (
    <Container sx={{ my: 4, display: 'flex', flexDirection: 'column', gap: 7, alignItems: 'center' }}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography gutterBottom variant="subtitle1" color="text.secondary" component="div">
          To book a free consultation
        </Typography>
        <IconButton href={"mailto:" + contactEmail}>
          <MailOutlineIcon fontSize="large" />
        </IconButton>
        <Typography gutterBottom variant="h5" component="div">
          {contactEmail}
        </Typography>
      </Box>
    </Container>
  )
}