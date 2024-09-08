import React from "react";
import { Container } from "react-bootstrap";
import "../../Pages/Home/home.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Testmonial1 from "../../Images/Home/testimonial-1.png";

const HomeTestimonial = () => {
  return (
    <section className="home-testimonial pt-md-1 pt-4 px-md-0 px-2 mt-4 pb-md-5">
      {/* <Container fluid className="pt-5 ps-lg-5 pe-0"> */}

      <Container className="pt-2 pb-md-5" fluid>
        <Grid
          container
          spacing={2}
          className="pt-lg-4 pt-md-5 pt-3 pb-lg-0 pb-md-5 pb-3 px-lg-5"
        >
          <Grid item xs={12} className="">
            <Grid container spacing={2}>
              <Grid item xs={12} className="">
                <Typography
                  variant="h4"
                  component="h3"
                  className="position-relative text-center section-heading"
                  style={{ color: "#000" }}
                >
                  Client Testimonials
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className="py-lg-0 py-1 px-lg-3 how-works-boxWrapper"
            xs={12}
          >
            <Card
              className="mx-auto py-2 px-md-5"
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                // borderRadius: "10px",
              }}
            >
              <Box className="h-100 mt-3 text-center">
                <img src={Testmonial1} alt="" style={{ width: "75px" }} />
              </Box>
              <CardContent className="px-md-5">
                <Typography
                  variant="body1"
                  component="p"
                  className="text-center mt-2 px-lg-5 px-md-3"
                  style={{ color: "#000" }}
                >
                  "I am happier with my experience using this job
                  portal. It made my job search so much easier, and I quickly
                  found the perfect opportunity. Thank you for the fantastic
                  service!"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HomeTestimonial;
