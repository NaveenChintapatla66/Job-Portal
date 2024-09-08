import React, { useEffect, useState } from "react";
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
import { getApihandler } from "../../Apihandler";
import { Link } from "react-router-dom";

const BrowseCategories = () => {
  const [data,setData]=useState({});

  useEffect(()=>{
    getCategoryCount();
  })
  const getCategoryCount =async()=>{
    const res = await getApihandler("/getCountOfCategory");
     setData(res.data)
  }
  return (
    <section className="browse-categories py-1 px-lg-0 px-4 my-3">
      {/* <Container fluid className="pt-5 ps-lg-5 pe-0"> */}

      <Container className="pb-5" fluid>
        <Grid
          container
          spacing={2}
          className="pt-lg-4 pt-md-5 pt-4 pb-md-0 pb-3 px-lg-5"
        >
          <Grid item xs={12} className="mb-4">
            <Grid container spacing={2}>
              <Grid item xs={12} className="">
                <Typography
                  variant="h4"
                  component="h3"
                  className=" position-relative d-flex justify-content-center align-items-center section-heading"
                  style={{ color: "#000" }}
                >
                  Browse Categories
                  <span
                    variant="body1"
                    component="span"
                    className="position-relative text-end view-all-btn position-absolute end-0 d-md-block d-none"
                    style={{ color: "#000" }}
                  >
                    View All
                  </span>
                </Typography>
                <Typography
                  variant="h4"
                  component="h3"
                  className="d-md-none text-end"
                  style={{ color: "#000" }}
                >
                  <span
                    variant="body1"
                    component="span"
                    className="position-relative  view-all-btn"
                    style={{ color: "#000" }}
                  >
                    View All
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className="py-lg-0 py-2 px-lg-3 home-ownerboxWrapper"
            lg={3}
            sm={6}
            xs={12}
          >
            <Link to="/apply-job">
              <Card
                className="mx-auto py-2"
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 8px 1px",
                  borderRadius: "10px",
                }}
              >
                <Box className="h-100 mt-4 text-center">
                  <img src={BrowseCategory1} alt="" style={{ width: "75px" }} />
                </Box>
                <CardContent className="">
                  <Typography
                    variant="subtitle1"
                    component="h5"
                    className="browse-category-boxTitle text-center mt-2"
                  >
                    Account & Finance
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid
            item
            className="py-lg-0 py-2 px-lg-3 home-ownerboxWrapper"
            lg={3}
            sm={6}
            xs={12}
          >
            <Link to="/apply-job">
              <Card
                className="mx-auto py-2"
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 8px 1px",
                  borderRadius: "10px",
                }}
              >
                <Box className="h-100 mt-4 text-center">
                  <img src={BrowseCategory2} alt="" style={{ width: "75px" }} />
                </Box>
                <CardContent className="">
                  <Typography
                    variant="subtitle1"
                    component="h5"
                    className="browse-category-boxTitle text-center mt-2"
                  >
                    Healthcare
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid
            item
            className="py-lg-0 py-2 px-lg-3 home-ownerboxWrapper"
            lg={3}
            sm={6}
            xs={12}
          >
            <Link to="/apply-job">
              <Card
                className="mx-auto py-2"
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 8px 1px",
                  borderRadius: "10px",
                }}
              >
                <Box className="h-100 mt-4 text-center">
                  <img src={BrowseCategory3} alt="" style={{ width: "75px" }} />
                </Box>
                <CardContent className="">
                  <Typography
                    variant="subtitle1"
                    component="h5"
                    className="browse-category-boxTitle text-center mt-2"
                  >
                    IT ( Software )
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid
            item
            className="py-lg-0 py-2 px-lg-3 home-ownerboxWrapper"
            lg={3}
            sm={6}
            xs={12}
          >
            <Link to="/apply-job">
              <Card
                className="mx-auto py-2"
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 8px 1px",
                  borderRadius: "10px",
                }}
              >
                <Box className="h-100 mt-4 text-center">
                  <img src={BrowseCategory4} alt="" style={{ width: "75px" }} />
                </Box>
                <CardContent className="">
                  <Typography
                    variant="subtitle1"
                    component="h5"
                    className="browse-category-boxTitle text-center mt-2"
                  >
                    Education & Training
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BrowseCategories;
