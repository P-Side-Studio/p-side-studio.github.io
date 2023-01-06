import { Box } from "@mui/system";
import { ReactComponent as SiteLogo } from '../icons/P-Side-Studio-Logo.svg';
import { Parallax } from 'react-parallax'
import { Button, Fade, IconButton, SpeedDial, SpeedDialAction, useTheme } from "@mui/material";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { BsSpotify } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { BsChevronDown } from "react-icons/bs";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { APP_BAR_HEIGHT } from '../App'
import { useSyncPagePath } from "../hooks/useSyncPagePath";
import { useInView } from "react-intersection-observer";

type HomeProps = {
  id: string,
};

export function Home({ id }: HomeProps) {

  const socials = [
    { name: 'Spotify', icon: <BsSpotify />, link: 'https://open.spotify.com/artist/14pk52yKqb0NFQivwORvAw?si=RC1FCHRaR822ihVH5SntXQ' },
    { name: 'Instagram', icon: <BsInstagram />, link: 'https://www.instagram.com/p_side_94/' },
    { name: 'TikTok', icon: <FaTiktok />, link: 'https://www.tiktok.com/@p.side' },
    { name: 'Facebook', icon: <BsFacebook />, link: 'https://www.facebook.com/p.side.94/' },
    { name: 'Youtube', icon: <BsYoutube />, link: 'https://www.youtube.com/channel/UCsBTfAYSvmDnssnp6jnNGDQ' },
  ]

  let backgroundImageIndex = 0
  const backgroundImages = [
    "/images/desk.jpg",
    "/images/piano.jpg",
    "/images/microphone.jpg",
    "/images/guitars.jpg",
    "/images/drumpad.jpg",
  ]

  const [showSocialButtons, setShowSocialButtons] = React.useState<boolean>(false);
  const [showChevron, setShowChevron] = React.useState<boolean>(false);
  const [backgroundImage, setbackgroundImage] = React.useState<string>(backgroundImages[backgroundImageIndex]);

  const { ref, inView, entry } = useInView()
  const logoRef = useSyncPagePath(id);
  const theme = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      if (inView) {
        backgroundImageIndex++
        backgroundImageIndex %= backgroundImages.length
        setbackgroundImage(backgroundImages[backgroundImageIndex])
      }
    }, 4200);
    return () => clearInterval(interval);
  }, [inView])

  return (
    <>
      <Parallax style={{ zIndex: theme.zIndex.drawer + 1 }} blur={3} bgImage={backgroundImage} strength={400} bgImageStyle={{ translate: '0px -200px' }}>
        <Box
          ref={ref}
          id={id}
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          width='100%'
          sx={{ backgroundColor: { xs: 'rgb(29 28 23)', md: "rgba(0, 0, 0, 0.80)" } }}
          style={{
            height: `calc(100dvh - ${APP_BAR_HEIGHT}px)`,
          }}>
          <Fade in timeout={1500} onEntering={() => setShowChevron(true)}>
            <Box ref={logoRef} width='80%' maxWidth={500} height='60%'>
              <SiteLogo fill={theme.palette.background.paper}
                  width="100%"
                height="100%" />
            </Box>
          </Fade>
          {/* <Fade in={showSocialButtons} timeout={1500} onEntered={() => setShowChevron(true)}>
            <Box mb={5} alignItems='top' display='flex' gap={1}>
              {socials.map((social) =>
                <IconButton href={social.link} target="_blank" size={'large'}>
                  {social.icon}
                </IconButton>
              )}
            </Box>
          </Fade> */}
          <Fade in={showChevron} timeout={2000}>
            <Box
              component={motion.div}
              animate={{
                translateY: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity
              }}
            >
              <Button
                component={Link}
                to='body'>
                <BsChevronDown fill={theme.palette.background.paper} fontSize={60} />
              </Button>
            </Box>
          </Fade>
        </Box>
      </Parallax>

      <SpeedDial
        hidden={false}
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 30, right: 20 }}
        icon={<SpeedDialIcon />}
      >
        {socials.map((social) => (
          <SpeedDialAction
            key={social.name}
            icon={social.icon}
            tooltipTitle={social.name}
            onClick={() => window.open(social.link, '_blank')}
          />
        ))}
      </SpeedDial>
    </>
  )
}