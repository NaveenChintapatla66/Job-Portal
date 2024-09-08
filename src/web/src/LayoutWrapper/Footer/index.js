import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import GharaajLogo from "../../Images/Universal/footer-logo.png";
import email from "../../Images/Universal/email.png";
import phone from "../../Images/Universal/phone.png";
import address from "../../Images/Universal/address.png";
import facebook from "../../Images/Universal/facebook-Icon.png";
import linkedin from "../../Images/Universal/linkedin-Icon.png";
import twitter from "../../Images/Universal/twitter-Icon.png";
import instagram from "../../Images/Universal/instagram-Icon.png";
import youtube from "../../Images/Universal/youtube-Icon.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper position-relative">
        <footer className="main-footer py-5 px-lg-5 px-4">
          <Container fluid className="pb-md-5">
            <Grid container spacing={2} className="pb-5">
              <Grid item lg={4} sm={12} className="pb-4 w-100">
                <div className="footer-logo-wrapper">
                  <Typography
                    // variant="h3"
                    component="h4"
                    style={{
                      color: "#fff",
                      fontSize: "40px",
                      fontWeight: 800,
                      lineHeight: "46px",
                    }}
                    className="text-md-start text-center"
                  >
                    Job Portal
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={2.5}
                sm={3}
                xs={12}
                className="mt-lg-5 mt-4 me-lg-0 me-4"
              >
                <Typography
                  variant="body1"
                  component="p"
                  className="text-white footer-menus text-md-start text-center "
                >
                  Home
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className="text-white pt-3 footer-menus text-md-start text-center"
                >
                  Candidate
                </Typography>
              </Grid>
              <Grid
                item
                lg={2.5}
                sm={3}
                className="mt-lg-0 mt-4 me-lg-0 me-4"
              ></Grid>
              <Grid item lg={2.5} sm={5} xs={12} className="mt-lg-5 mt-4">
                <Typography
                  variant="body1"
                  component="p"
                  className="text-white footer-menus text-md-start text-center"
                >
                  Subscribe Now
                </Typography>
                <Box className="input-wrapper mt-3 px-md-0 px-4">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="email"
                    style={{
                      borderRadius: "15px",
                      color: "#787878",
                      border: "none",
                      padding: "8px 15px",
                      width: "100%",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default Footer;
