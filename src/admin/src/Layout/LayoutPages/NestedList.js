import * as React from "react";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import WorkIcon from "@mui/icons-material/Work";

export default function NestedList() {
  const [bookingOpen, setBookingOpen] = React.useState(true);
  const [withdrawalOpen, setWithdrawalOpen] = React.useState(true);

  const bookingHandle = () => {
    setBookingOpen(!bookingOpen);
  };
  const withdrawHandle = () => {
    setWithdrawalOpen(!withdrawalOpen);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Link to="/dashboard">
        <ListItemButton>
          <ListItemIcon>
            <IconButton>
              <DashboardIcon style={{ color: "#3091F9" }} fontSize="large" />
            </IconButton>
          </ListItemIcon>
          <ListItemText style={{ color: "#000" }} primary="Dashboard" />
        </ListItemButton>
      </Link>
     
    </List>
  );
}
