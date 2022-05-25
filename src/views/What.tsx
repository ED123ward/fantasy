import React from "react";
import styled from "styled-components";
import { Container, Typography, Box } from "@mui/material";
import { ImageContainer } from "components";
import useIntersectionObserver, { useInViewContext } from "helpers";
import Whatbackground from "../assets/image21.png";
import { display } from "@mui/system";

const Product = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const { handleChangeViews } = useInViewContext();
  React.useEffect(() => {
    if (isVisible) {
      handleChangeViews({
        home: false,
        about: false,
        product: true,
        vision: false,
        contact: false,
      });
    }
  }, [isVisible, handleChangeViews]);

  return (
    <WhatBlock>
      <Box
        id="product"
        sx={{
          //   backgroundColor: "primary.main",
          paddingY: "80px",
        }}
      >
        <Container
          sx={{
            paddingBottom: { xs: "60px", md: "160px" },
          }}
          ref={ref}
        >
          <Typography
            textAlign="center"
            fontSize={{ xs: "24px", md: "48px" }}
            marginBottom="70px"
          >
            What is Community Gaming?
          </Typography>

          <Box
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            paddingBottom={{
              xs: "40px",
            }}
          >
            <Box
              sx={{
                flex: "0 0 50%",
                paddingLeft: { md: "70px" },
              }}
            >
              <Typography
                textAlign="center"
                color="#D0D0D2"
                fontSize={{ md: "18px" }}
              >
                Fantasy Games is building a world-wide gaming platform that
                provides a fun and fair skill-based mobile gaming experience to
                everyone.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: {xs: "none", md: "flex"},
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              padding: '20px'
             
            }}
          >
            <Box
              sx={{
                flex: "0 0 20%",
                textAlign: "center",
                display: "flex",
                alignItems:'center'
              }}
              paddingBottom={{
                xs: "40px",
              }}
            >
              <ImageContainer
                url="/images/lianjieqianbao 2.png"
                sx={{
                  width: "150px",
                  mx: "auto",
                }}
              />
            </Box>
            <Box
              sx={{
                flex: "0 0 20%",
                textAlign: "center",
                display: "flex",
                alignItems:'center'
              }}
              paddingBottom={{
                xs: "40px",
              }}
            >
              <ImageContainer
                url="/images/Vector.png"
                sx={{
                  width: "40px",
                  mx: "auto",
                }}
              />
            </Box>
            <Box
              sx={{
                flex: "0 0 20%",
                textAlign: "center",
              }}
              paddingBottom={{
                xs: "40px",
                display: "flex",
                alignItems:'center'
              }}
            >
              <ImageContainer
                url="/images/image 26.png"
                sx={{
                  width: "88px",
                  mx: "auto",
                  display: "flex",
                  alignItems:'center'
                }}
              />
            </Box>
            <Box
              sx={{
                flex: "0 0 20%",
                textAlign: "center",
                display: "flex",
                alignItems:'center'
              }}
              paddingBottom={{
                xs: "40px",
              }}
            >
              <ImageContainer
                url="/images/Vector.png"
                sx={{
                  width: "40px",
                  mx: "auto",
                }}
              />
            </Box>

            <Box
              sx={{
                flex: "0 0 20%",
                textAlign: "center",
              }}
              paddingBottom={{
                xs: "40px",
              }}
            >
              <ImageContainer
                url="/images/image 25.png"
                sx={{
                  width: "203px",
                  mx: "auto",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                flex: "0 0 30%",
              }}
              paddingBottom={{
                xs: "65px",
              }}
            >
              <Typography
                color="text.primary"
                fontSize={{ xs: "20px", md: "26px" }}
                fontWeight="900"
                lineHeight={{ md: "50px" }}
                mb={{ xs: 2, md: "30px" }}
                whiteSpace="nowrap"
                textAlign={{ xs: "center", md: "center" }}
              >
                Easy Onboarding
              </Typography>

              <Typography
                fontSize={{ xs: "14px", md: "18px" }}
                lineHeight={{ md: "44px" }}
                color="#D0D0D2"
                textAlign={{ xs: "center", md: "center" }}
              >
                Account creation is fast and simple! Just confirm your email
                address to get your account wallet set up (or connect your own).
                Tons of great games to decorate your life !
              </Typography>
            </Box>
            <Box
              sx={{
                flex: "0 0 30%",
              }}
              paddingBottom={{
                xs: "65px",
              }}
            >
              <Typography
                color="text.primary"
                fontSize={{ xs: "20px", md: "26px" }}
                fontWeight="900"
                lineHeight={{ md: "50px" }}
                mb={{ xs: 2, md: "30px" }}
                whiteSpace="nowrap"
                textAlign={{ xs: "center", md: "center" }}
              >
                Match Reporting
              </Typography>

              <Typography
                fontSize={{ xs: "14px", md: "18px" }}
                lineHeight={{ md: "44px" }}
                color="#D0D0D2"
                textAlign={{ xs: "center", md: "center" }}
              >
                Use the self reporting feature to keep your tournaments moving!
                For API-supported games, match results will automatically be
                entered into the bracket.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: "0 0 30%",
              }}
              paddingBottom={{
                xs: "65px",
              }}
            >
              <Typography
                color="text.primary"
                fontSize={{ xs: "20px", md: "26px" }}
                fontWeight="900"
                lineHeight={{ md: "50px" }}
                mb={{ xs: 2, md: "30px" }}
                whiteSpace="nowrap"
                textAlign={{ xs: "center", md: "center" }}
              >
                Instant Payments
              </Typography>

              <Typography
                fontSize={{ xs: "14px", md: "18px" }}
                lineHeight={{ md: "44px" }}
                color="#D0D0D2"
                textAlign={{ xs: "center", md: "center" }}
              >
                Take advantage of our automated payment technology to have your
                players paid out instantly and transparently. No more wait times
                or high fees!
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </WhatBlock>
  );
};

export default Product;

const WhatBlock = styled.div`
  background: url(${Whatbackground});
  background-repeat: no-repeat;
  background-position: 0 50%;
  width: 100%;
  height: 946px;
  
`;
