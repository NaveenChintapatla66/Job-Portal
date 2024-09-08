import { Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getApihandler, postApihandler } from "../../Apihandler";
import Layout from "../../LayoutWrapper/AdminLayout";
import styles from "./apply.module.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArticleIcon from "@mui/icons-material/Article";
export default function ApplyJobs() {
  const [category, setCategory] = useState("");
  const [CategoryData, setCategoryData] = useState([]);
  const [data, setData] = useState([]);
  console.log("data------>", data);
  const [jobId, setJobId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getJobs();
    getCategory();
  }, []);
  useEffect(() => {
    if (jobId !== "") {
      ApplyJobs();
    }
  }, [jobId]);
  useEffect(() => {
    if (category !== "") {
      getFiltterData();
    }
  }, [category]);
  const getFiltterData = async () => {
    console.log("category Id-->", category);
    const res = await getApihandler(`/getJobList/Category_${category}`);
    console.log("res-->", res);
    if (res.status === 200) {
      setData(res.data);
      setCategory("");
    }
  };
  const getCategory = async () => {
    let result = await getApihandler("/getCategory/All");
    setCategoryData(result.data);
    console.log(" get category result is - ", result.data);
  };
  const ApplyJobs = async () => {
    const id = localStorage.getItem("UserId");
    const res = await postApihandler(`/applyForJob/${id}/${jobId}`);
    // console.log("res job apply---->", res);
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Apply Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      setJobId("");
      navigate("/");
    } else {
      // console.log("Errors");
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: res.error.response.data.message,
      });
    }
  };
  const getJobs = async () => {
    const res = await getApihandler("/getJobList/All");
    // console.log("res---->", res);
    setData(res.data);
  };
  const onChangeHandler1 = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("value");
    setCategory(option);
  };
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h3>ApplyJobs</h3>
      </div>
      <Grid container>
        <Grid lg={4} xs={12}>
          <div style={{ padding: "1rem" }}>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Filter
            </Typography>
            <select
              fontSize="16px"
              style={{
                padding: "16.5px 14px",
                width: "100%",
                borderRadius: "5px",
                borderColor: "rgb(0 0 0 / 28%)",
              }}
              onChange={onChangeHandler1}
            >
              <option value="null">Category...</option>
              {CategoryData !== undefined &&
                CategoryData !== null &&
                CategoryData.map((mod) => {
                  return (
                    <option value={mod.category} id={mod._id}>
                      {mod.category}
                    </option>
                  );
                })}
            </select>
          </div>
        </Grid>

        {data.length !== 0 ? (
          <Grid lg={8} xs={12} sx={{ padding: "1rem" }}>
            {data.map((val) => {
              return (
                <div style={{ padding: "10px" }}>
                  <Card className={styles.card_css}>
                    <Grid container>
                      <Grid lg={12}>
                        <Typography variant="h6" sx={{ fontWeight: "700" }}>
                          {val.title}
                        </Typography>

                        <Typography variant="h" sx={{ fontWeight: "600" }}>
                          {val.category}
                        </Typography>
                      </Grid>
                      <Grid lg={3} sx={{ padding: "10px" }}>
                        <div>
                          <Typography>
                            {" "}
                            <BusinessCenterIcon /> {val.subCategory}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid lg={3} sx={{ padding: "10px" }}>
                        <div>
                          <Typography>
                            {" "}
                            <CurrencyRupeeIcon /> {val.salaryRange}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid lg={3} sx={{ padding: "10px" }}>
                        <div>
                          <Typography>
                            {" "}
                            <AccessAlarmIcon /> {val.jobType}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid lg={3} sx={{ padding: "10px" }}>
                        <div>
                          <Typography>
                            {" "}
                            <LocationOnIcon /> {val.jobLocation}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid lg={12} sx={{ padding: "10px" }}>
                        <div>
                          <Typography>
                            {" "}
                            <ArticleIcon /> {val.description}
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid lg={12} sx={{ padding: "10px" }}>
                      <Button
                        onClick={() => {
                          setJobId(val._id);
                        }}
                      >
                        Apply
                      </Button>
                    </Grid>
                  </Card>
                </div>
              );
            })}
          </Grid>
        ) : (
          <div style={{ padding: "2rem" }}>
            <h4>No Data</h4>
          </div>
        )}
      </Grid>
    </Layout>
  );
}
