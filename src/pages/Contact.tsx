import { Box, Container, IconButton, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useTranslation } from "react-i18next";

const contactEmail = 'studio@pside.ca'

export function Contact() {
  const { t } = useTranslation()
  return (
    <Container sx={{ my: 4, display: 'flex', flexDirection: 'column', gap: 7, alignItems: 'center' }}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography gutterBottom variant="subtitle1" color="text.secondary" component="div">
          {t("contact-consultation")}
        </Typography>
        <IconButton href={"mailto:" + contactEmail}>
          <MailOutlineIcon fontSize="large" />
        </IconButton>
        <Typography mb={4} gutterBottom variant="h5" component="div">
          {contactEmail}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="text.secondary" component="div">
          {t("contact-address")}
        </Typography>
      </Box>
    </Container>
  )
}