import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../../Css/signup-login.module.css";
import "../SingupLogin/index.css";
import { useForm } from "react-hook-form";
import { postApihandler, putApihandler } from "../../Apihandler";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import HeaderBanner from "../../Images/Home/Home-Header-Banner.jpg";
import Layout from "../../LayoutWrapper/AdminLayout";
import { Tab, Tabs } from "react-bootstrap";

const defaultTheme = createTheme();

export default function UpdatePassword() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const { register, handleSubmit, reset } = useForm();
  const [toogle, setToggle] = React.useState("signup");
  const [id, setId] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    setUserEmail(localStorage.getItem("userEmail"));
    setUserName(localStorage.getItem("UserName"));
    setId(localStorage.getItem("UserId"));
  }, [userEmail, userName]);

  React.useEffect(() => {
    if (
      userEmail !== "" &&
      userName !== null &&
      userName !== "" &&
      userName !== null
    )
      LoginWithSocialMedia();
  }, [userEmail, userName]);

  const LoginWithSocialMedia = async () => {
    const res = await postApihandler("/signupByAccount", {
      userEmail: userEmail,
      signupBy: "Google",
    });
    console.log("login api response - ", res);
    if (res.status === 200) {
      localStorage.setItem("UserId", res.data._id);
      Swal.fire({
        icon: "success",
        title: "Successfully login",
        showConfirmButton: false,
        timer: 2000,
      });
      reset();
      navigate("/");
    } else {
      localStorage.clear();
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: res.error.response.data.message,
      });
    }
  };

  const SignupSubmit = async (value) => {
    console.log("value====>", value);
    const res = await postApihandler("/userSignUp", value);
    console.log("res=====>", res);
    if (res.status === 200) {
      Swal.fire({
        position: "middle-centre",
        icon: "success",
        title: "Successfully Signup",
        showConfirmButton: false,
        timer: 2000,
      });
      reset();
      setToggle("login");
      // navigate("/login");
    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: res.error.response.data.message,
      });
    }
  };

  const loginSubmit = async (value) => {
    // console.log("value====>", value);
    const res = await postApihandler("/UserLogin", value);

    if (res.status === 200) {
      localStorage.setItem("UserId", res.data._id);
      localStorage.setItem("UserName", res.data.fullName);

      Swal.fire({
        icon: "success",
        title: "Successfully login",
        showConfirmButton: false,
        timer: 2000,
      });
      reset();
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

  return (
    <Layout>
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          // sx={{ height: "100vh" }}
          className="flex-lg-row flex-column flex-lg-wrap flex-nowrap login-signup-pageWrapper"
        >
          <CssBaseline />
          <Grid
            item
            xs={12}
            lg={7}
            sx={{
              // backgroundImage: "url(" + bgimg + ")",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="px-md-5 py-lg-0 py-md-3"
          >
            <div
              className="login-carouselWrapper h-100"
              style={{ overflow: "hidden" }}
            >
              <img
                src={HeaderBanner}
                alt=""
                style={{
                  // height: "19rem",
                  // borderRadius: "6px",
                  // objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>
          </Grid>
          <Grid
            item
            lg={5}
            xs={12}
            component={Paper}
            elevation={6}
            square
            className="px-md-5 px-2 py-lg-0 py-md-3  shadow-none"
          >
            <Box className="login-signup-boxWrapper my-md-0 my-4">
              <Typography
                variant="h4"
                component="h3"
                className="text-start section-heading mb-md-4"
                style={{ color: "#000" }}
              >
                Update Password
              </Typography>
              <Box
                sx={{
                  my: 3,
                  // mx: 4,

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit(loginSubmit)}
                  sx={{ mt: 1 }}
                >
                  <Typography>New Password</Typography>
                  <TextField
                    placeholder="New Password"
                    size="small"
                    margin="normal"
                    required
                    fullWidth
                    id="userEmail"
                    name="userEmail"
                    autoComplete="userEmail"
                    type="password"
                    autoFocus
                    {...register("userEmail")}
                    style={{ marginTop: "10px" }}
                  />
                  <Typography>Re-Enter Password</Typography>
                  <TextField
                    placeholder="Re-Enter Password"
                    size="small"
                    margin="normal"
                    required
                    fullWidth
                    id="userEmail"
                    name="userEmail"
                    autoComplete="userEmail"
                    type="password"
                    autoFocus
                    {...register("userEmail")}
                    style={{ marginTop: "10px" }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={styles.form_button}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  );
}
