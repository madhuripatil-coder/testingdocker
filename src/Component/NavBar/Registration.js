import React from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//import { RadioGroup, FormControlLabel, Radio, FormLabel } from "@mui/material";

function Registration() {
  //const [gender, setGender] = useState("");
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
    getValues,
  } = useForm({});

  // const handleGenderChange = (event) => {
  //   setGender(event.target.value);
  // };

  const validateConfirmPassword = (value) => {
    const { password } = getValues();
    return value === password || "Passwords do not match";
  };

  const registerHandler = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registered Successfully!!");
        navigate("/login");
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
    // Perform registration logic here (e.g., API call)
    // alert("Registered Successfully!!");
    // navigate("/login");
  };

  return (
    <div style={mystyle}>
      <form onSubmit={handleSubmit(registerHandler)}>
        <Box
          display={"flex"}
          borderStyle={"solid"}
          borderColor={"blue"}
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
            Sign Up
          </Typography>

          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: 1 }}
          >
            <Grid item xs={4}>
              <Typography variant="body1">Username</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                type="text"
                name="username"
                {...register("username", {
                  required: true,
                  minLength: 3,
                })}
                variant="outlined"
                placeholder="Username"
                fullWidth
              />
              {errors.username && errors.username.type === "required" && (
                <p className="errorMsg" style={{ color: "red" }}>
                  Username is required.
                </p>
              )}
              {errors.username && errors.username.type === "minLength" && (
                <p className="errorMsg" style={{ color: "red" }}>
                  Username should be at least 3 characters.
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
              <Typography variant="body1">Email</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
                variant="outlined"
                placeholder="Email"
                fullWidth
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorMsg" style={{ color: "red" }}>
                  Email is required.
                </p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="errorMsg" style={{ color: "red" }}>
                  Email is not valid.
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
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

          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: 1 }}
          >
            <Grid item xs={4}>
              <Typography variant="body1">Confirm Password</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                type="password"
                name="confirmpassword"
                {...register("confirmpassword", {
                  required: true,
                  validate: validateConfirmPassword,
                })}
                variant="outlined"
                placeholder="Confirm Password"
                fullWidth
              />
              {errors.confirmpassword &&
                errors.confirmpassword.type === "required" && (
                  <p className="errorMsg" style={{ color: "red" }}>
                    Confirm Password is required.
                  </p>
                )}
              {errors.confirmpassword && (
                <p className="errorMsg" style={{ color: "red" }}>
                  {errors.confirmpassword.message}
                </p>
              )}
            </Grid>
          </Grid>
          {/* <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: 1 }}
          >
            <Grid item xs={4}>
              <FormLabel sx={{ marginBottom: 1 }}>Gender</FormLabel>
            </Grid>
            <Grid item xs={8}>
              <div style={{ position: "relative" }}>
                <RadioGroup
                  row
                  value={gender}
                  controlId="gender"
                  onChange={handleGenderChange}
                  sx={{ marginBottom: 0 }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    {...register("gender")}
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                    {...register("gender")}
                  />
                </RadioGroup>
                {errors.gender && (
                  <p
                    className="errorMsg"
                    style={{
                      color: "red",
                      position: "absolute",
                      bottom: -30,
                      left: 0,
                    }}
                  >
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: 1 }}
          >
            <Grid item xs={4}>
              <Typography variant="body1">Date of Birth</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                type="date"
                name="dob"
                {...register("dob", {
                  required: true,
                })}
                variant="outlined"
                fullWidth
              />
              {errors.dob && (
                <p className="errorMsg" style={{ color: "red" }}>
                  Date of Birth is required.
                </p>
              )}
            </Grid>
          </Grid> */}

          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: 1 }}
          >
            <Grid item xs={4}>
              <Typography variant="body1">Contact No</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                type="tel"
                name="contactNo"
                {...register("contactNo", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                variant="outlined"
                placeholder="Contact No"
                fullWidth
              />
              {errors.contactNo && errors.contactNo.type === "required" && (
                <p className="errorMsg" style={{ color: "red" }}>
                  Contact number is required.
                </p>
              )}
              {errors.contactNo && errors.contactNo.type === "pattern" && (
                <p className="errorMsg" style={{ color: "red" }}>
                  Contact number should be exactly 10 digits.
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
            Sign Up
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Registration;
