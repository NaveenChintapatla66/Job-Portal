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
import "./index.css";
import { useForm } from "react-hook-form";
import { postApihandler, putApihandler } from "../../Apihandler";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import HeaderBanner from "../../Images/Home/Home-Header-Banner.jpg";
import Layout from "../../LayoutWrapper/AdminLayout";
import { Tab, Tabs } from "react-bootstrap";

const defaultTheme = createTheme();

export default function SignupLogin() {
  const [loginMail, setLoginMail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  // console.log("loginMail - ", loginMail);
  // console.log("loginPassword - ", loginPassword);
  const [userEmail, setUserEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const { register, handleSubmit, reset } = useForm();
  const [toogle, setToggle] = React.useState("signup");
  const [signupStatus, setSignupStatus] = React.useState(false);
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
    if (signupStatus) {
      // console.log("userSignUP value====>", value);
      const res = await postApihandler("/userSignUP", value);
      console.log("res=====>", res);
      if (res.status === 200) {
        setSignupStatus(false);
        Swal.fire({
          position: "middle-centre",
          icon: "success",
          title: "Successfully Signup",
          showConfirmButton: false,
          timer: 2000,
        });
        reset();
        // setToggle("login");
        // navigate("/login");
      } else {
        setSignupStatus(false);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: res.error.response.data.message,
        });
      }
    }
  };

  const loginSubmit = async () => {
    // console.log("submitted login details - ");
    // console.log("submitted loginMail - ", loginMail);
    // console.log("submitted loginPassword - ", loginPassword);
    const res = await postApihandler("/UserLogin", {
      emailOrMobile: loginMail,
      password: loginPassword,
    });
    console.log("UserLogin resp====>", res);

    if (res.status === 200) {
      localStorage.setItem("UserId", res.data._id);
      localStorage.setItem("UserName", res.data.name);

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
              <Tabs
                defaultActiveKey={signupStatus ? "login" : "registration"}
                id="justify-tab-example"
                className="mb-3 login-signup-wrapper"
                justify
                style={{
                  background: "#F0F0F0",
                  padding: "5px",
                  borderRadius: "6px",
                }}
              >
                <Tab eventKey="login" title="Login">
                  <Box
                    sx={{
                      my: 3,
                      // mx: 4,

                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      // component="form"
                      // noValidate
                      // onSubmit={handleSubmit(loginSubmit)}
                      sx={{ mt: 1 }}
                    >
                      <Typography>Email/Mobile Number</Typography>
                      <TextField
                        placeholder="Email/Mobile Number"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="emailOrMobile"
                        name="emailOrMobile"
                        // autoComplete="emailOrMobile"
                        type="email"
                        autoFocus
                        // {...register("emailOrMobile")}
                        onChange={(e) => setLoginMail(e.target.value)}
                        style={{ marginTop: "10px" }}
                      />

                      <Typography className="mt-3">Password</Typography>
                      <TextField
                        placeholder="Confirm Password"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        name="login-password"
                        type="password"
                        id="login-password"
                        // autoComplete="current-password"
                        onChange={(e) => setLoginPassword(e.target.value)}
                        // {...register("password")}
                        style={{ marginTop: "10px" }}
                      />
                      <div>
                        <Typography
                          sx={{
                            textAlign: "right",
                            marginTop: "10px",
                          }}
                        >
                          <Link to="/reset-password">
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "rgba(2, 201, 136, 1)",
                              }}
                            >
                              Forgot Password?
                            </span>
                          </Link>
                        </Typography>
                      </div>
                      <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        className={styles.form_button}
                        onClick={() => loginSubmit()}
                      >
                        Login
                      </Button>
                    </Box>
                  </Box>
                </Tab>
                <Tab eventKey="registration" title="Registration">
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
                      onSubmit={handleSubmit(SignupSubmit)}
                      sx={{ mt: 1 }}
                    >
                      <Typography>Full Name</Typography>
                      <TextField
                        placeholder="Full Name"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        {...register("name")}
                        style={{ marginTop: "10px" }}
                      />
                      <Typography className="mt-3">Email</Typography>
                      <TextField
                        placeholder="Email"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        name="userEmail"
                        type="email"
                        id="userEmail"
                        autoComplete="userEmail"
                        {...register("userEmail")}
                        style={{ marginTop: "10px" }}
                      />
                      <Typography className="mt-3">Mobile</Typography>
                      <TextField
                        placeholder="Mobile"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        name="phone_number"
                        type="number"
                        id="phone_number"
                        autoComplete="phone_number"
                        {...register("phone_number")}
                        style={{ marginTop: "10px" }}
                      />
                      <Typography className="mt-3">Password</Typography>
                      <TextField
                        placeholder="Password"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register("password")}
                        style={{ marginTop: "10px" }}
                      />
                      <Typography className="mt-3">Confirm Password</Typography>
                      <TextField
                        placeholder="Confirm Password"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        type="password"
                        id="confirmPassword"
                        autoComplete="confirmPassword"
                        {...register("confirmPassword")}
                        style={{ marginTop: "10px" }}
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={styles.form_button}
                        onClick={() => setSignupStatus(true)}
                      >
                        Sign Up
                      </Button>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "20px",
                        paddingTop: "10px",
                        fontWeight: "500",
                        color: "rgba(102, 102, 102, 1)",
                        lineHeight: "30px",
                      }}
                    >
                      By signing up, I agree to Gharaaj’s{" "}
                      <span style={{ color: "rgba(2, 201, 136, 1)" }}>
                        Terms of Use
                      </span>{" "}
                      and{" "}
                      <span style={{ color: "rgba(2, 201, 136, 1)" }}>
                        Privacy Policy
                      </span>
                      .
                    </Typography>
                  </Box>
                </Tab>
              </Tabs>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  );
}
