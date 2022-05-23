import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import { ImageContainer } from 'components'
import useIntersectionObserver, { useInViewContext } from 'helpers'

const Product = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const { handleChangeViews } = useInViewContext()
  React.useEffect(() => {
    if (isVisible) {
      handleChangeViews({
        home: false,
        about: false,
        product: true,
        vision: false,
        contact: false,
      })
    }
  }, [isVisible, handleChangeViews])

  return (
    <Box
      id="product"
      sx={{
        backgroundColor: 'primary.main',
        paddingY: '80px',
      }}
    >
      <Container
        sx={{
          paddingBottom: { xs: '60px', md: '160px' },
        }}
        ref={ref}
      >
        <Typography textAlign="center" fontSize={{ xs: '24px', md: '48px' }} marginBottom="70px">
          Product
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Box
            sx={{
              position: 'relative',
              flex: '0 0 50%',
              mb: { xs: '1rem', md: '0' },
            }}
          >
            <ImageContainer
              url="/images/product-iphone-bg.png"
              sx={{
                width: '203px',
                mx: 'auto',
              }}
            />
            <ImageContainer
              url="/images/product-iphone-fg.png"
              sx={{
                width: '173px',
                position: 'absolute',
                top: '38px',
                left: '50%',
              }}
            />
          </Box>

          <Box
            sx={{
              flex: '0 0 50%',
              paddingLeft: { md: '70px' },
            }}
          >
            <Typography marginBottom={{ xs: '50px', md: '130px' }} fontSize={{ md: '24px' }} fontWeight="800">
              Fantasy Games is the world leading eSports platform for mobile games. We organizes head to head matches,
              tournament and live events inside mobile games. Our platform helps mobile game developers turn their
              casual esports games into a competitive mobile arena with our platform.
            </Typography>
            <Typography fontSize={{ md: '24px' }} fontWeight="800">
              Fantasy Games is building a world-wide gaming platform that provide a fun and fair skill-based mobile
              gaming experience to anyone.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Product
