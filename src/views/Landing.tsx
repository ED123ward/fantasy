import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { ImageContainer } from "components";
import useIntersectionObserver, { useInViewContext } from "helpers";
import { Links } from "config";

const Landing = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const { handleChangeViews } = useInViewContext();
  React.useEffect(() => {
    if (isVisible) {
      handleChangeViews({
        home: true,
        about: false,
        vision: false,
        product: false,
        contact: false,
      });
    }
  }, [isVisible, handleChangeViews]);

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        paddingTop: "68px",
        paddingBottom:{xs:'60px',md:''},
        background:
          "url(/images/landingBg.png), linear-gradient(90deg, #1F213B 0%, #1E1F3A 100%)",
        backgroundPosition: "bottom, center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%, cover",
      }}
    >
      <ImageContainer
          url="/images/landing-right-bubbles.png"
          sx={{ maxWidth: { xs: '250px', md: '37vw' }, height: 'fit-content' , display:{xs:'block',md:'none'},margin:{xs:'0 auto'} }}
        />
      <Container
        sx={{
          paddingBottom: { xs: "60px", md: "60px" },
        }}
        ref={ref}
      >
        <Box
          sx={{ flexDirection: { xs: "column", md: "row" },display: 'flex', alignItems:'center' }}
          paddingBottom={{
            xs: "40px",
          }}
          
        >
          <Box
            sx={{
              flex: "0 0 75%",
              paddingLeft: { md: "70px" },
              margin: "10% auto 0 auto",
            }}
          >
            <Typography
              textAlign="center"
              color="text.primary"
              fontSize={{ xs: "26px", md: "30px" }}
              fontWeight="900"
              lineHeight={{ md: "63px" }}
            >
            Join our Alpha test for a whitelist opportunity! Players will be rewarded with Fantasy coins for playing the battle to earn tournaments. You will earn Fantasy coins regardless of winning or losing, but if you win, you will be rewarded with more.
            </Typography>
          </Box>
          <ImageContainer
          url="/images/landing-right-bubbles.png"
          sx={{ maxWidth: { xs: '10px', md: '27vw' }, height: 'fit-content' , display:{xs:'none',md:'block'},margin:{xs:'90px auto 0 auto'} }}
        />
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          display: { xs: "", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "top",
          justifyContent: "space-between",
        }}
      >
        <Box
          mb={{ xs: 2, md: "45px" }}
          sx={{
            width: "100%",
            marginRight: { md: "50px" },
            // background: 'url(/images/landing-right-bubbles.png) no-repeat right center  / contain',
          }}
        >
          <Box>
            <Typography
              color="text.primary"
              fontSize={{ xs: "22px", md: "30px" }}
              fontWeight="900"
              lineHeight={{ md: "63px" }}
              mb={{ xs: 2, md: "50px" }}
              whiteSpace="nowrap"
            >
             Whitelist Qualifications
            </Typography>
            <Typography
              component="ul"
              sx={{
                listStylePosition: "outside",
                paddingLeft: "24px",
              }}
            >
              <Typography
                component="li"
                fontSize={{ xs: "14px", md: "24px" }}
                lineHeight={{ md: "44px" }}
                fontWeight="700"
              >
              Fantasy coins can be used for participating in the whitelist of the limited edition NFTs & starter NFTs. The more Fantasy coins, the higher the chance of being whitelisted.

              </Typography>
              <Typography
                component="li"
                fontSize={{ xs: "14px", md: "24px" }}
                lineHeight={{ md: "44px" }}
                fontWeight="700"
              >
                Only one whitelist spot per user

              </Typography>
            </Typography>
          </Box>
        </Box>
        {/* <ImageContainer
          url="/images/landing-right-bubbles.png"
          sx={{ maxWidth: { xs: '250px', md: '37vw' }, height: 'fit-content' }}
        /> */}
        <Box
          mb={{ xs: 2, md: "45px" }}
          sx={{
            width: "80%",
            marginLeft: { md: "50px" },
            // background: 'url(/images/landing-right-bubbles.png) no-repeat right center  / contain',
          }}
        >
          <Box>
            <Typography
              color="text.primary"
              fontSize={{ xs: "22px", md: "30px" }}
              fontWeight="900"
              lineHeight={{ md: "63px" }}
              mb={{ xs: 2, md: "50px" }}
              whiteSpace="nowrap"
            >
             Only one whitelist spot per user
            </Typography>
            <Typography
              component="ul"
              sx={{
                listStylePosition: "outside",
                paddingLeft: "24px",
              }}
            >
              <Typography
                component="li"
                fontSize={{ xs: "14px", md: "24px" }}
                lineHeight={{ md: "44px" }}
                fontWeight="700"
              >
               Report a bug or provide suggestions for improvements

              </Typography>
              <Typography
                component="li"
                fontSize={{ xs: "14px", md: "24px" }}
                lineHeight={{ md: "44px" }}
                fontWeight="700"
              >
               Invite friends
              </Typography>
              <Typography
                component="li"
                fontSize={{ xs: "14px", md: "24px" }}
                lineHeight={{ md: "44px" }}
                fontWeight="700"
              >
              Upload a video promoting the app
              </Typography>
              <Typography
                component="li"
                fontSize={{ xs: "14px", md: "24px" }}
                lineHeight={{ md: "44px" }}
                fontWeight="700"
              >
             Enter battle to earn tournaments every day
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          href={Links.app}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            background:
              "linear-gradient(68.76deg, #5156E3 32.68%, #E253E9 98.95%)",
            boxSizing: "border-box",
            borderRadius: "14px",
            fontSize: { md: "24px" },
            cursor: Links.app ? "pointer" : "not-allowed",
            margin: "0 auto",
          }}
        >
          {Links.app ? "Get App" : "Coming Soon"}
        </Button>
      </Box>
    </Box>
  );
};

export default Landing;
