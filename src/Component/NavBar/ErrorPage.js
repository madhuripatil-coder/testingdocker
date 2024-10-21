import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const mystyle = {
    backgroundImage: "url('backgroundimg.jpg')",
    height: "93vh",
    padding: "100px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={mystyle}>
      <h1> Page Not Found</h1>
      <br />

      <p>This url is not matched.</p>

      <Button
        component={Link}
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "#FFB300",
        }}
      >
        Go To Home Page
      </Button>
    </div>
  );
};

export default ErrorPage;
