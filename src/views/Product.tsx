import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import { ImageContainer } from 'components'
import useIntersectionObserver, { useInViewContext } from 'helpers'
import { margin } from '@mui/system'

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
        paddingY: {
          xs:'0px',
          md:'80px'
        },
      }}
    >
      <Container
        sx={{
          paddingBottom: { xs: '60px', md: '160px' },
        }}
        ref={ref}
      >
        <Typography sx={{marginTop:{xs:'40px'},marginBottom:{xs:'40px',md:'70px'}}} textAlign="center" fontSize={{ xs: '24px', md: '48px' }} >
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
                position: {xs:'relative'},
                left:{xs:'-10%'}
              }}
            />
            <ImageContainer
              url="/images/product-iphone-fg.png"
              sx={{
                width: '173px',
                position: 'absolute',
                top: '38px',
                left: {xs:'35%',md:'50%'},
              }}
            />
          </Box>

          <Box
            sx={{
              flex: '0 0 50%',
              paddingLeft: { xs:'30px',  md: '70px' },
              marginTop:{xs:'40px'}
            }}
          >
             <Typography
                color="text.primary"
                fontSize={{ xs: '20px', md: '32px' }}
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
                  fontSize={{ xs: '14px', md: '18px' }}
                  lineHeight={{ md: '44px' }}
                  fontWeight="700"
                  color='#D0D0D2'
                >
                  Tons of great games to decorate your life !
                </Typography>
                <Typography
                  component="li"
                  fontSize={{ xs: '14px', md: '18px' }}
                  lineHeight={{ md: '44px' }}
                  fontWeight="700"
                  color='#D0D0D2'
                >
                  It's more fun and relaxing than the games your ever played! Conquer the real players of your skill
                  level in fair and fun games.
                </Typography>
              </Typography>
           
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Product
