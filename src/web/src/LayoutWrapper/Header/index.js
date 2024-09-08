import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import Offcanvas from "react-bootstrap/Offcanvas";
// import GharaajLogo from "../../Images/Universal/gharaaj-icon.png";
import { Box, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Popover from "@mui/material/Popover";

function Header() {
  const [userId, setuserId] = useState();
  console.log("userId - ", userId);
  const [userName, setuserName] = useState();
  const [cityName, setCityName] = useState("Indore");
  // popup user profile and logout option
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // console.log("userName is - ", userName);
  const Navigate = useNavigate();

  // Get Local Storage Data
  useEffect(() => {
    setuserId(localStorage.getItem("UserId"));
    setuserName(localStorage.getItem("UserName"));
  }, []);

  // Page Refresh
  function refreshPage() {
    window.location.reload();
  }

  // Use Context

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 px-lg-5 px-md-4 my-navbar"
          style={{ borderBottom: "1px solid #D2D2D2" }}
        >
          <Container fluid>
            <Navbar.Brand href="/" style={{ width: "30%" }}>
              <Typography
                // variant="h3"
                component="h4"
                style={{
                  color: "#3091F9",
                  fontWeight: 800,
                }}
                className="header-logo"
              >
                Job Portal
              </Typography>
            </Navbar.Brand>
            <Nav className="d-lg-flex flex-row align-items-center d-none main-menus">
              <Nav.Link href="/" className="px-4">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="px-4">
                Candidate
              </Nav.Link>
              <Nav.Link href="#" className="px-4">
                Contact Us
              </Nav.Link>
              {userId !== null && userName !== null ? (
                <>
                  <Button
                    className="px-4 bg-transparent text-dark nav-link"
                    onClick={handleClick}
                  >
                    {"Hello " + userName}
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                  >
                    <Link to="/user-profile">
                      {" "}
                      <Typography sx={{ p: 2 }}>My Profile</Typography>
                    </Link>
                   
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        padding: "10px",
                      }}
                    >
                      <Button
                        size="sm"
                        onClick={() => {
                          swal({
                            title: "Are you sure?",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          }).then((willDelete) => {
                            if (willDelete) {
                              localStorage.clear();
                              swal({
                                icon: "success",
                                text: "You have been logged out!",
                              });
                              Navigate("/");
                              refreshPage();
                            } else {
                              swal("Your login details are secure!", {
                                icon: "success",
                              });
                            }
                          });
                        }}
                      >
                        Logout
                      </Button>
                    </div>
                  </Popover>
                </>
              ) : (
                <Nav.Link href="/#/signup-login" className="px-4">
                  Sign In
                </Nav.Link>
              )}

              <Link className="px-4" to="">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#3091F9",
                    color: "#FFF",
                    // fontSize: "14px",
                    // fontWeight: 500,
                    fontSize: "20px",
                    borderRadius: "10px",
                    padding: "5px 25px",
                  }}
                >
                  Post A Job
                </Button>
              </Link>
            </Nav>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ border: "none" }}
              className="toggle-button d-lg-none"
            >
              {/* <div className="toggle-wrapper d-flex">
                <div
                  className="toggle-image-wrapper"
                  style={{ maxWidth: "24px" }}
                >
                  <img src={""} alt="" />
                </div>
                <span
                  className="toggle-text ps-2"
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 500,
                    color: "#222",
                  }}
                >
                  Menu
                </span>
              </div> */}
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="ps-lg-4"
                >
                  <Box className="d-flex justify-content-between align-items-center">
                    {userId !== undefined && userId !== null && (
                      <div className="me-5 ">
                        <Link
                          to="/user-profile"
                          style={{
                            color: "#222222",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <IconButton className="p-0 pe-3">
                            {/* <AccountCircleIcon
                              style={{
                                color: "rgb(2, 201, 136)",
                                fontSize: "50px",
                              }}
                            /> */}
                          </IconButton>
                          {userName}
                        </Link>
                      </div>
                    )}

                    {userId === undefined ||
                      (userId === null && (
                        <Link to="/signup-login">
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#02C988",
                              color: "#FFF",
                            }}
                          >
                            Login/Registration
                          </Button>
                        </Link>
                      ))}
                  </Box>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <NavDropdown.Divider
                style={{
                  background: "#E7E7E7",
                  height: "1px",
                }}
                className="mt-lg-3 mb-lg-5 mt-2 mb-md-4"
              />
              <Offcanvas.Body className="ps-lg-5 ps-md-4 ps-4">
                <Nav className="main-menus mb-5">
                  <Nav.Link href="" className="px-4">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#" className="px-4">
                    Candidate
                  </Nav.Link>
                  <Nav.Link href="#" className="px-4">
                    Contact Us
                  </Nav.Link>
                  <Nav.Link href="#" className="px-4">
                    Sign In
                  </Nav.Link>
                  <Nav.Link className="px-4" href="">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#3091F9",
                        color: "#FFF",
                        // fontSize: "14px",
                        // fontWeight: 500,
                        fontSize: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      Post A Job
                    </Button>
                  </Nav.Link>
                </Nav>
                {userId === undefined || userId === null ? (
                  ""
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => {
                      swal({
                        title: "Are you sure?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          localStorage.clear();
                          swal({
                            icon: "success",
                            text: "You have been logged out!",
                          });
                          Navigate("/");
                          refreshPage();
                        } else {
                          swal("Your login details are secure!", {
                            icon: "success",
                          });
                        }
                      });
                    }}
                    style={{
                      color: "#222222",
                      border: "1px solid #1F4069",
                      width: "60%",
                      fontWeight: 500,
                    }}
                  >
                    Logout
                  </Button>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
