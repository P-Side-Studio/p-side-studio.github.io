import { Box } from "@mui/system";
import { ReactComponent as SiteLogo } from '../icons/P-Side-Studio-Logo.svg';
import { Background, Parallax } from 'react-parallax'
import { Button, Fade, IconButton, SpeedDial, SpeedDialAction, Tooltip, useTheme } from "@mui/material";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { BsFacebook } from 'react-icons/bs'
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { APP_BAR_HEIGHT } from '../App'
import { useSyncPagePath } from "../hooks/useSyncPagePath";
import { useInView } from "react-intersection-observer";
import { ImageCrossFader } from "../components/ImageCrossFader";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

type HomeProps = {
  id: string,
};

export function Home({ id }: HomeProps) {

  const socials = [
    { name: 'Listen to portfolio', icon: <LibraryMusicIcon />, link: '/portfolio' },
    { name: 'Follow on Facebook', icon: <BsFacebook />, link: 'https://www.facebook.com/psidestudiomtl' },
    { name: 'Send an email', icon: <MailOutlineIcon />, link: 'mailto:studio@pside.ca' },
  ]

  const [showSocialButtons, setShowSocialButtons] = React.useState<boolean>(false);
  const [showChevron, setShowChevron] = React.useState<boolean>(false);

  const { ref, inView, entry } = useInView()
  const logoRef = useSyncPagePath(id);
  const theme = useTheme()

  return (
    <>
      <Parallax style={{ zIndex: theme.zIndex.drawer - 1 }} strength={400}>
        <Background>
          <ImageCrossFader
            urls={[
              "/images/desk.jpg",
              "/images/piano.jpg",
              "/images/microphone.jpg",
              "/images/guitars.jpg",
              "/images/drumpad.jpg",
            ]}
            intervalTime={4200}
            fadeTime={1200}
            pause={!inView}
            style={{ filter: "blur(2px)", translate: '0px -200px', maxWidth: "infinite", maxHeight: '150vh' }} />
        </Background>
        <Box
          ref={ref}
          id={id}
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          width='100%'
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.80)" }}
          style={{
            height: `calc(100dvh - ${APP_BAR_HEIGHT}px)`,
          }}>
          <Fade in timeout={1500} onEntering={() => setShowSocialButtons(true)}>
            <Box ref={logoRef} width='80%' maxWidth={500} height='60%'>
              <SiteLogo fill={theme.palette.background.paper}
                width="100%"
                height="100%" />
            </Box>
          </Fade>
          <Fade in={showSocialButtons} timeout={1500} onEntered={() => setShowChevron(true)}>
            <Box mb={5} alignItems='top' display='flex' gap={3}>
              {socials.map((social) =>
                <Tooltip title={social.name}>
                  <IconButton href={social.link} target="_blank" size={'large'} color="primary">
                    {social.icon}
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Fade>
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