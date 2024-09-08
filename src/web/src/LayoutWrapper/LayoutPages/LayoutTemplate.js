import * as React from "react";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";
import { postApihandler } from "../../Apihandler";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";

export default function LayoutTemplate({ children }) {
  const [userId, setuserId] = useState();

  // Get Local Storage Data
  useEffect(() => {
    setuserId(localStorage.getItem("UserId"));
  }, []);

  const bookConsultant = async () => {
    // console.log("Consultant Called");
    if (userId !== null && userId !== undefined) {
      const response = await postApihandler(
        `/bookConsultant/${userId}/64e6f996d1dc6f3babafaa2c`
      );
      // console.log("bookConsultant====>", response);
      if (response.status === 200) {
        Swal.fire({
          position: "middle-centre",
          icon: "success",
          title: "Consultant Booked Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          position: "middle-centre",
          icon: "error",
          title: response.error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else {
      Swal.fire({
        position: "middle-centre",
        icon: "error",
        title: "Login Your Account!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
}
