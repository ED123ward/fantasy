import React from 'react'
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material'
import useIntersectionObserver, { useInViewContext } from 'helpers'

const About = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const visionRef = React.useRef<HTMLDivElement | null>(null)
  const visionEntry = useIntersectionObserver(visionRef, {})
  const visionIsVisible = !!visionEntry?.isIntersecting

  const { handleChangeViews } = useInViewContext()
  React.useEffect(() => {
    if (isVisible) {
      handleChangeViews({
        home: false,
        about: true,
        vision: false,
        product: false,
        contact: false,
      })
    }

    if (visionIsVisible) {
      handleChangeViews({
        home: false,
        about: false,
        vision: true,
        product: false,
        contact: false,
      })
    }
  }, [isVisible, handleChangeViews, visionIsVisible])

  return (
    <Container sx={{ height: '100%' }} maxWidth="lg" ref={ref}>
      <Box id="about" mb="120px">
        <Typography textAlign="center" fontSize={{ xs: '24px', md: '48px' }} py="55px">
          About Us
        </Typography>
        <Card sx={{ backgroundColor: 'primary.main', borderRadius: '14px' }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Typography fontWeight="800" fontSize={{ md: '24px' }} mb={{ xs: '1rem', md: '0' }}>
            Fantasy Games is a leading eSports platform for mobile games. We organize PVP matches, tournaments and live events inside mobile games. Our platform helps mobile game developers turn their casual games into a competitive mobile esports arena.
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: { xs: '100%', md: '412px' } }}
              image="/images/about.png"
              alt="Fantasy Games is a leading eSports platform for mobile games."
            />
          </CardContent>
        </Card>
      </Box>
      <Box id="vision" mb="120px" ref={visionRef}>
        <Typography textAlign="center" fontSize={{ xs: '24px', md: '48px' }} py="55px">
          Our Vision
        </Typography>
        <Typography textAlign="center" fontWeight="800" fontSize={{ md: '24px' }}>
        Fantasy Games is building a world-wide gaming platform that provides a fun and fair skill-based mobile gaming experience to everyone.
        </Typography>
      </Box>
    </Container>
  )
}

export default About
