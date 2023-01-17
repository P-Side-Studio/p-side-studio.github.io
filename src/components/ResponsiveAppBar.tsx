import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ReactComponent as SiteLogo } from '../icons/P-Side-Studio-Logo.svg';
import { Link } from "react-router-dom"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, SwipeableDrawer } from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';
import { APP_BAR_HEIGHT } from '../App'
import { useTranslation } from 'react-i18next';

function ResponsiveAppBar() {

  const { t, i18n } = useTranslation()

  const pages = [
    { title: t("services"), url: 'services', icon: <LibraryMusicIcon /> },
    { title: t("contact"), url: 'contact', icon: <PersonIcon /> },
  ]

  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setDrawerOpen(open);
      };


  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ marginTop: 2 }}>
        {pages.map((page) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton component={Link} to={page.url}>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const localeSelect = () => (
    <Select
      sx={{ width: 100 }}
      onFocus={(e) => e.currentTarget.blur()}
      disableUnderline
      variant="standard"
      defaultValue={'en'}
      onChange={(e) =>
        i18n.changeLanguage(e.target.value)
      }
    >
      <MenuItem value={'en'}>English</MenuItem>
      <MenuItem value={'fr'}>Français</MenuItem>
    </Select>
  )

  const siteLogoComponent = <SiteLogo width={65} height={65} />

  return (
    <>
      <AppBar sx={{ height: APP_BAR_HEIGHT }} elevation={0} position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Layout */}
            <Button component={Link} to='home' sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mr: 1, pt: 1.1, pb: 0.6 }}>
              {siteLogoComponent}
            </Button>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 1 }}>
              {pages.map((page) => (
                <Button
                  draggable={false}
                  component={Link}
                  to={page.url}
                  key={page.title}
                  onClick={toggleDrawer(false)}
                  sx={{
                    mx: 0.7,
                    color: 'black',
                    display: 'block',
                    textTransform: 'none',
                    fontSize: 'larger',
                    fontWeight: 300
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            {/* Mobile Layout */}
            <Box sx={{ width: 100, flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Button component={Link} to='home' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, mr: 1, pt: 1.1, pb: 0.6 }}>
              {siteLogoComponent}
            </Button>
            <Box sx={{ flexGrow: 0 }}>
              {localeSelect()}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <SwipeableDrawer
        PaperProps={{ sx: { backgroundColor: 'palette.primary' } }}
        anchor='left'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        {drawerList()}
      </SwipeableDrawer>
    </>
  );
}
export default ResponsiveAppBar;