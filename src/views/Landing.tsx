import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import { ImageContainer } from 'components'
import useIntersectionObserver, { useInViewContext } from 'helpers'
import { Links } from 'config'

const Landing = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const { handleChangeViews } = useInViewContext()
  React.useEffect(() => {
    if (isVisible) {
      handleChangeViews({
        home: true,
        about: false,
        vision: false,
        product: false,
        contact: false,
      })
    }
  }, [isVisible, handleChangeViews])

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        height: '100vh',
        paddingTop: '68px',
        background: 'url(/images/landingBg.png), linear-gradient(90deg, #1F213B 0%, #1E1F3A 100%)',
        backgroundPosition: 'bottom, center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%, cover',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Box
            mb={{ xs: 2, md: '45px' }}
            sx={{
              width: '100%',
              // background: 'url(/images/landing-right-bubbles.png) no-repeat right center  / contain',
            }}
          >
            <Box>
              <Typography
                color="text.primary"
                fontSize={{ xs: '26px', md: '32px' }}
                fontWeight="900"
                lineHeight={{ md: '63px' }}
                mb={{ xs: 2, md: '50px' }}
                whiteSpace="nowrap"
              >
                An Esports gaming platform
              </Typography>
              <Typography
                component="ul"
                sx={{
                  listStylePosition: 'outside',
                  paddingLeft: '24px',
                }}
              >
                <Typography
                  component="li"
                  fontSize={{ xs: '16px', md: '24px' }}
                  lineHeight={{ md: '44px' }}
                  fontWeight="700"
                >
                  Tons of great games to decorate your life !
                </Typography>
                <Typography
                  component="li"
                  fontSize={{ xs: '16px', md: '24px' }}
                  lineHeight={{ md: '44px' }}
                  fontWeight="700"
                >
                  It's more fun and relaxing than the games your ever played! Conquer the real players of your skill
                  level in fair and fun games.
                </Typography>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
            }}
          >
            <Button
              variant="contained"
              href={Links.app}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'linear-gradient(68.76deg, #5156E3 32.68%, #E253E9 98.95%)',
                boxSizing: 'border-box',
                borderRadius: '14px',
                fontSize: { md: '24px' },
                cursor: Links.app ? 'pointer' : 'not-allowed',
              }}
            >
              {Links.app ? 'Get App' : 'Coming Soon'}
            </Button>
          </Box>
        </Box>
        <ImageContainer
          url="/images/landing-right-bubbles.png"
          sx={{ maxWidth: { xs: '250px', md: '37vw' }, height: 'fit-content' }}
        />
      </Container>
    </Box>
  )
}

export default Landing
