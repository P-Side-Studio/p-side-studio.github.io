import ResponsiveAppBar from "./components/ResponsiveAppBar"
import { Page } from "./components/Page"
import { ThemeProvider } from "@mui/material"
import { theme } from './theme'
import { Container, Divider, Box } from "@mui/material"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import LoadingPage from "./components/LoadingPage"
import { Contact } from "./pages/Contact"

export const APP_BAR_HEIGHT = 80

function App() {

  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {

    if (loading) {
      return
    }
    scrollToLocation()
  }, [location])

  const imagesLoaded = () => {
    setLoading(false)
    scrollToLocation()
  }

  // This is a dirty way to wait for images to load, there is no imageloaded callback on the image crossfade npm element which is used within the home page
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      scrollToLocation()
    }, 1000);
  }, [])

  function scrollToLocation() {
    let id = location.pathname.split('/').at(-1)
    if (!id) {
      id = 'home'
    }
    var elementPosition = document.getElementById(id)?.getBoundingClientRect().top
    var offsetPosition = (elementPosition ? elementPosition : 0) + window.pageYOffset - APP_BAR_HEIGHT

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoadingPage open={loading} />
        <Home id='home' />
        <ResponsiveAppBar />
        <Box
          sx={{
            backgroundImage: `linear-gradient(0deg, rgb(255 244 216) 0%, ${theme.palette.primary.main} 100%)`,
            backgroundRepeat: 'no-repeat',
          }}>
          <Container id='body'>
            <Page title="Services" id="services">
              <Services />
            </Page>
            <Divider />
            <Page title="Contact" id="contact">
              <Contact />
            </Page>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App