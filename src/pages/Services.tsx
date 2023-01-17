import { Box, Card, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, Typography, Button, useTheme } from "@mui/material"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useTranslation } from "react-i18next";

export function Services() {
  const { t } = useTranslation()
  const productionBullets = [
    t("production-bullet-1"),
    t("production-bullet-2"),
    t("production-bullet-3"),
  ]
  const recordingBullets = [
    t("recording-bullet-1"),
    t("recording-bullet-2"),
  ]
  const mixingBullets = [
    t("mixing-bullet-1"),
    t("mixing-bullet-2"),
  ]
  const theme = useTheme()
  return (
    <Box mt={10} display='flex' flexDirection='column' gap={20}>
      {/* PRODUCTION */}
      <Card sx={{ maxWidth: { xs: 800, md: 800, lg: "100%" }, borderRadius: 5, display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography mb={2} component="div" variant="h3">
              {t("production")}
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
              {t("production-body")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="/portfolio" target="_blank" color='secondary' size="large">{t("portfolio-action")}</Button>
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
              {t("recording")}
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
              {t("recording-body")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="/portfolio" target="_blank" color='secondary' size="large">{t("portfolio-action")}</Button>
          </CardActions>
        </Box>
      </Card>
      {/* MIX MASTER */}
      <Card sx={{ maxWidth: { xs: 800, md: 800, lg: "100%" }, borderRadius: 5, display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography mb={2} component="div" variant="h3">
              {t("mixing")}
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
              {t("mixing-body")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="/portfolio" target="_blank" color='secondary' size="large">{t("portfolio-action")}</Button>
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