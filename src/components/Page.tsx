import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Link, Paper } from '@mui/material'
import { navigation, Links } from 'config'
import useIntersectionObserver, { InViewContext, useInViewContext } from 'helpers'
import ImageContainer from './ImageContainer'
import { DiscordIcon, TelegramIcon, TwitterIcon } from 'assets'

interface Props {
  children: React.ReactNode
}

const ResponsiveAppBar: React.FC<Props> = ({ children, ...props }) => {
  const [currentSection, setCurrentSection] = useState({
    home: true,
    about: false,
    vision: false,
    product: false,
    contact: false,
  })

  const scrollTo = (id: string) => {
    const section = document.querySelector(`#${id}`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // get current year
  // const currentYear = new Date().getFullYear()

  const contactRef = React.useRef<HTMLDivElement | null>(null)
  const contactEntry = useIntersectionObserver(contactRef, {})
  const contactIsVisible = !!contactEntry?.isIntersecting

  const { handleChangeViews } = useInViewContext()
  React.useEffect(() => {
    if (contactIsVisible) {
      handleChangeViews({
        home: false,
        about: false,
        vision: false,
        product: false,
        contact: true,
      })
    }
  }, [handleChangeViews, contactIsVisible])

  return (
    <Paper sx={{ minHeight: '100vh' }}>
      <InViewContext.Provider value={{ views: currentSection, handleChangeViews: setCurrentSection }}>
        <AppBar sx={{ background: 'transparent', height: '68px' }} elevation={0}>
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Link
              href="/#home"
              color="text.primary"
              sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <ImageContainer
                  url="/logo.png"
                  sx={{
                    width: { xs: '25px', md: '48px' },
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  fontWeight="900"
                  fontSize={{ md: '28px' }}
                  color="text.primary"
                >
                  Fantasy
                </Typography>
              </Box>
            </Link>
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navigation.map((page) => (
                  <Button
                    key={page.name}
                    onClick={scrollTo.bind(null, page.id)}
                    variant="text"
                    href={`/#${page.id}`}
                    sx={{
                      my: 2,
                      display: 'block',
                      color: 'text.primary',
                      textShadow: currentSection[page.id] ? '0 0 7px #fff' : 'unset',
                      fontWeight: '700',
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {children}
        <Box
          component="footer"
          sx={{
            p: { xs: '30px', md: '30px 130px' },
          }}
          id="contact"
          ref={contactRef}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                borderRadius: '15px',
                height: { xs: 'unset', md: '185px' },
                alingItems: 'center',
                maxWidth: '1020px',
                padding: '25px',
              }}
            >
              <Box
                sx={{
                  flex: '0 0 50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: { xs: '20px', md: '0' },
                }}
              >
                <Typography fontSize="36px" fontWeight="800">
                  Contact Us
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: '0 0 50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    marginBottom: 2,
                    gap: { xs: '10px', md: '0' },
                  }}
                >
                  <Link
                    href={Links.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="text.primary"
                    sx={{
                      textDecoration: 'none',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: '5px', md: '10px' },
                      }}
                    >
                      <TelegramIcon width="30px" />
                      <Typography fontSize="14px">Telegram</Typography>
                    </Box>
                  </Link>
                  <Box
                    sx={{
                      backgroundColor: 'text.primary',
                      width: '1px',
                      height: '12px',
                      mx: '40px',
                      display: { xs: 'none', md: 'block' },
                    }}
                  />
                  <Link
                    href={Links.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="text.primary"
                    sx={{
                      textDecoration: 'none',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: '5px', md: '10px' },
                      }}
                    >
                      <TwitterIcon width="30px" />
                      <Typography fontSize="14px">Twitter</Typography>
                    </Box>
                  </Link>
                  <Box
                    sx={{
                      backgroundColor: 'text.primary',
                      width: '1px',
                      height: '12px',
                      mx: '40px',
                      display: { xs: 'none', md: 'block' },
                    }}
                  />
                  <Link
                    href={Links.socials.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="text.primary"
                    sx={{
                      textDecoration: 'none',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: '5px', md: '10px' },
                      }}
                    >
                      <DiscordIcon width="30px" />
                      <Typography fontSize="14px">Discord</Typography>
                    </Box>
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: { xs: '10px', md: '0' },
                  }}
                >
                  <Link href="/tos" color="text.primary" fontSize="14px" marginRight="30px">
                    Terms &amp; Conditions of Service
                  </Link>
                  <Link href={Links.socials.email} rel="noreferrer noopener" color="text.primary" fontSize="14px">
                    Contact@fantasygames.me
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </InViewContext.Provider>
    </Paper>
  )
}
export default ResponsiveAppBar
