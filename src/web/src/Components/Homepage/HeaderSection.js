import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Box, Grid, Typography } from "@mui/material";
import HomeBannerModule from "../../Images/Home/Home-Header-Banner.jpg";
const HeaderSection = () => {
  return (
    <section className="home-header position-relative mt-4">
      <Container className="overflow-hidden mt-4" fluid>
        <Row className="justify-content-center">
          <Col md={12}>
            <Grid
              container
              spacing={2}
              fluid
              className="px-lg-5 flex-lg-row flex-column-reverse align-items-center"
            >
              <Grid item lg={6} className="py-lg-5 py-4 px-lg-4 px-md-5 px-3 ">
                <Typography
                  variant="h5"
                  component="h4"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    lineHeight: "30px",
                  }}
                  className="text-center pb-3 home-header-content"
                >
                  Discover your dream job with our Job Match Pro website.
                  Explore a wide range of career opportunities, apply easily,
                  and connect with employers. Your next career move starts here!
                </Typography>
                <Box className="text-center mt-md-5 mt-3">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#3091F9",
                      color: "#FFF",
                      fontWeight: 600,
                      fontSize: "24px",
                      borderRadius: "10px",
                      padding: "5px 30px",
                    }}
                  >
                    Join Now
                  </Button>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box className="h-100">
                  <img src={HomeBannerModule} alt="" className="h-100" />
                </Box>
              </Grid>
            </Grid>
          </Col>
        </Row>
      </Container>
      {/* <Container className="py-5 position-absolute start-0 end-0 home-header-searchBox">
        <Row className="justify-content-center">
          <Col md={8} xs={10}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box>
                  <Paper
                    sx={{
                      p: "23px 23px",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      boxShadow: "0px 4px 50px 0px #62478533",
                      borderRadius: "8px",
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search “PG in Bholaram Bhawarkua”"
                      onChange={(e) => {
                        setSearchKey(e.target.value);
                      }}
                    />
                    <Link to={`/properties/${searchKey !== "" && searchKey}`}>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "rgba(2, 201, 136, 1)",
                          color: "#000",
                        }}
                        className="px-4 py-2"
                      >
                        Search
                      </Button>
                    </Link>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Col>
        </Row>
      </Container> */}
    </section>
  );
};

export default HeaderSection;
