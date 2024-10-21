import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { name: userName, email: userEmail } = location.state;

  const mystyle = {
    backgroundImage: "url('/backgroundimg.jpg')",
    height: "93vh",
    padding: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={mystyle}>
      <h1>UserDetails</h1>
      <br />
      <h2>This is {params.name}'s details.</h2>
      <h3>Data from location:</h3>
      <h4>Name: {userName}</h4>
      <h4>Email: {userEmail}</h4>

      <br />
      <Button
        onClick={() => {
          navigate("/users");
        }}
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "#FFB300",
        }}
      >
        Back To User List
      </Button>
      <br />
      <br />
      <Button
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "#FFB300",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Home Page
      </Button>
    </div>
  );
};

export default UserDetails;
