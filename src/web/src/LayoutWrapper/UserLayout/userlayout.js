import React from "react";
import UserprofileLayout from "./userlayout";

const ProfileLayout = ({ children }) => {
  return (
    <>
      {" "}
      <UserprofileLayout>{children}</UserprofileLayout>
    </>
  );
};

export default ProfileLayout;
