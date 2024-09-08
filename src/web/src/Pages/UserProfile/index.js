import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../../LayoutWrapper/AdminLayout";
import image from "../../Images/user.webp";
import styles from "./user-profile.module.css";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getApihandler, putApihandler } from "../../Apihandler";
import PDFDownloadButton from "./pdf-downloader";
export default function UserProfile() {
  // useState.........//
  const [userdata, setUserData] = useState({});
  console.log("userdata--->", userdata.upload_resume);
  const { register, handleSubmit, setValue, watch } = useForm();
  const file = watch("upload_resume");
  // useEffect ........//
  useEffect(() => {
    getUserDetail();
  }, []);

  // Apis Fuctionality..///
  const getUserDetail = async () => {
    const id = localStorage.getItem("UserId");
    const res = await getApihandler(`/getUserInfo/${id}`);
    console.log("res--->", res);
    setUserData(res.data);
    setValue("name", res.data.name);
    setValue("userEmail", res.data.userEmail);
    setValue("phone_number", res.data.phone_number);
    setValue("gender", res.data.gender);
    setValue("hobbies", res.data.hobbies);
    setValue("marital_status", res.data.marital_status);
  };

  const onSubmit = async (value) => {
    const id = localStorage.getItem("UserId");
    const { name, userEmail, phone_number, gender, hobbies, marital_status } =
      value;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("userEmail", userEmail);
    formData.append("phone_number", phone_number);
    formData.append("gender", gender);
    formData.append("hobbies", hobbies);
    formData.append("marital_status", marital_status);
    formData.append("upload_resume", file[0]);
    const res = await putApihandler(`/addUserInformation/${id}`, formData);
    console.log("res-->", res);
  };
  return (
    <Layout>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        User Profile
      </Typography>
      <Grid container sx={{ padding: "1rem" }}>
        <Grid lg={6} md={6} sm={12}>
          <div className={styles.user_img_outerdiv}>
            <img src={image} className={styles.user_img} />
          </div>
        </Grid>
        <Grid lg={6} md={6} sm={12} className={styles.gride_outer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "500", textAlign: "center" }}
            >
              Detail
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Name
            </Typography>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Name"
              variant="standard"
              name="name"
              {...register("name")}
            />
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Email Address"
              variant="standard"
              name="userEmail"
              {...register("userEmail")}
            />
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Mobile No.
            </Typography>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder=" Mobile No."
              variant="standard"
              name="phone_number"
              {...register("phone_number")}
            />
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Gender
            </Typography>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Gender"
              variant="standard"
              name="gender"
              {...register("gender")}
            />
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Hobbies
            </Typography>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Hobbies"
              variant="standard"
              name="hobbies"
              {...register("hobbies")}
            />
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Marital status
            </Typography>
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Marital status"
              variant="standard"
              name="marital_status"
              {...register("marital_status")}
            />
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Resume
            </Typography>
            <input
              type="file"
              name="upload_resume"
              {...register("upload_resume")}
            />
            {/* <Typography>{data.upload_resume}</Typography> */}

            <br />
            <div style={{ textAlign: "center" }}>
              <Button type="submit">Save</Button>
            </div>
          </form>
          <div>
            {/* <PDFDownloadButton
              pdfUrl={userdata.upload_resume}
              pdfName={userdata.name}
            /> */}
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
