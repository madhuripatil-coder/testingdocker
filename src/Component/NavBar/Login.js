import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("login") === "true"
  );

  const navigate = useNavigate();

  const mystyle = {
    backgroundImage: "url('backgroundimg.jpg')",
    backgroundSize: "cover",
    minHeight: "100vh",
    width: "100vw",
    padding: "50px",
    backgroundRepeat: "no-repeat",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = async (data) => {
    try {
      const result = await axios.post("http://localhost:5000/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("result from login", result);
      if (result.data) {
        sessionStorage.setItem("login", "true");
        sessionStorage.setItem("user", result.data.user);
        sessionStorage.setItem("accessToken", result.data.accessToken);
        sessionStorage.setItem("refreshToken", result.data.refreshToken);
        sessionStorage.setItem("token", result.data.accessToken);

        let sessionToken = result.data.accessToken;
        console.log("sessionToken:", sessionToken);

        await getData(sessionToken);
        alert("Logged in Successfully!!");
        setIsLoggedIn(true);
        navigate("/");
      } else {
        alert("Login failed, please check your credentials.");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const getData = async (sessionToken) => {
    let result = await axios.get("http://localhost:5000/getData", {
      headers: {
        authorization: `Bearer ${sessionToken}`,
      },
    });
    console.log("result from getData", result.data);
  };

  const refreshToken = async () => {
    console.log("Refresh token calling");
    try {
      const responce = await axios.post("http://localhost:5000/refresh", {
        refreshToken: sessionStorage.getItem("refreshToken"),
      });
      sessionStorage.setItem("token", responce.data.accessToken);
    } catch (error) {
      console.error("failed to fetch token", error);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refreshToken();
  //   }, 1 * 60 * 1000);
  //   // return () => clearInterval(interval);
  // });

  useEffect(() => {
    // if (isLoggedIn === "true") {

    // } else {
    //   alert("session expired");
    // }
    const interval = setInterval(() => {
      refreshToken();
    }, 1 * 60 * 1000);

    // return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
    alert("Session expired. Please log in again.");
  };

  if (isLoggedIn) {
    return (
      <div style={mystyle}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          maxWidth={650}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign={"center"}>
            You are Already logged in!
          </Typography>
          <Button
            onClick={handleLogout}
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            Logout
          </Button>
        </Box>
      </div>
    );
  } else {
    return (
      <div style={mystyle}>
        <form onSubmit={handleSubmit(loginHandler)}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            margin={"auto"}
            marginTop={5}
            maxWidth={650}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <Typography variant="h2" padding={3} textAlign={"center"}>
              Login
            </Typography>

            <Grid
              container
              alignItems="center"
              spacing={2}
              sx={{ marginBottom: 1 }}
            >
              <Grid item xs={4}>
                <Typography variant="body1">Email</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  type="email"
                  style={{ background: "transparent" }}
                  name="email"
                  {...register("email", { required: true })}
                  variant="outlined"
                  placeholder="Email"
                  fullWidth
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg" style={{ color: "red" }}>
                    Email is required.
                  </p>
                )}
              </Grid>
            </Grid>

            <Grid
              container
              alignItems="center"
              spacing={2}
              sx={{ marginBottom: 1 }}
            >
              <Grid item xs={4}>
                <Typography variant="body1">Password</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  type="password"
                  name="password"
                  {...register("password", { required: true, minLength: 6 })}
                  variant="outlined"
                  placeholder="Password"
                  fullWidth
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="errorMsg" style={{ color: "red" }}>
                    Password is required.
                  </p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="errorMsg" style={{ color: "red" }}>
                    Password should be at least 6 characters.
                  </p>
                )}
              </Grid>
            </Grid>

            <Button
              type="submit"
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="warning"
            >
              Login
            </Button>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="warning"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Box>
        </form>
      </div>
    );
  }
}

export default Login;
