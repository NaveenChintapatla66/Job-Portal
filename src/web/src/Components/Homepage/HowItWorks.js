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
import BrowseCategory1 from "../../Images/Home/categories-icon-1.jpg";
import BrowseCategory2 from "../../Images/Home/categories-icon-2.jpg";
import BrowseCategory3 from "../../Images/Home/categories-icon-3.jpg";
import BrowseCategory4 from "../../Images/Home/categories-icon-4.jpg";
import Works1 from "../../Images/Home/account.jpg";
import Works2 from "../../Images/Home/search-job.jpg";
import Works3 from "../../Images/Home/apply-job.jpg";

const HowItWorks = () => {
  return (
    <section className="how-it-works py-1 px-md-0 px-2 my-4">
      {/* <Container fluid className="pt-5 ps-lg-5 pe-0"> */}

      <Container className="pt-2 pb-4" fluid>
        <Grid
          container
          spacing={2}
          className="pt-lg-4 pt-md-5 pt-3 pb-lg-0 pb-md-5 pb-3 px-lg-5"
        >
          <Grid item xs={12} className="mb-4">
            <Grid container spacing={2}>
              <Grid item xs={12} className="">
                <Typography
                  variant="h4"
                  component="h3"
                  className=" position-relative text-center section-heading mb-md-4"
                  style={{ color: "#000" }}
                >
                  How it Works
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className="py-lg-0 py-2 px-lg-3 how-works-boxWrapper"
            lg={4}
            sm={4}
            xs={12}
          >
            <Card
              className="mx-auto py-2"
              style={{
                // backgroundColor: "#fff",
                boxShadow: "none",
                // borderRadius: "10px",
              }}
            >
              <Box className="h-100 mt-4 text-center">
                <img src={Works1} alt="" style={{ width: "75px" }} />
              </Box>
              <CardContent className="">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  className="how-works-boxTitle text-center mt-2"
                >
                  Create An Account
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            className="py-lg-0 py-2 px-lg-3 how-works-boxWrapper"
            lg={4}
            sm={4}
            xs={12}
          >
            <Card
              className="mx-auto py-2"
              style={{
                // backgroundColor: "#fff",
                boxShadow: "none",
                // borderRadius: "10px",
              }}
            >
              <Box className="h-100 mt-4 text-center">
                <img src={Works2} alt="" style={{ width: "75px" }} />
              </Box>
              <CardContent className="">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  className="how-works-boxTitle text-center mt-2"
                >
                  Search Job
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            className="py-lg-0 py-2 px-lg-3 how-works-boxWrapper"
            lg={4}
            sm={4}
            xs={12}
          >
            <Card
              className="mx-auto py-2"
              style={{
                // backgroundColor: "#fff",
                boxShadow: "none",
                // borderRadius: "10px",
              }}
            >
              <Box className="h-100 mt-4 text-center">
                <img src={Works3} alt="" style={{ width: "75px" }} />
              </Box>
              <CardContent className="">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  className="how-works-boxTitle text-center mt-2"
                >
                  Apply for Job
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HowItWorks;
