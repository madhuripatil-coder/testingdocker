import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Checkbox,
  FormGroup,
} from "@mui/material";

function Authentication() {
  const [isSignUp, setisSignUp] = useState(false);

  const [gender, setGender] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({});

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const validateConfirmPassword = (value) => {
    const { password } = getValues();
    return value === password || "Passwords do not match";
  };
  const onSubmit = (data) => {
    console.log(data);
    alert("Registered Successfully !!");

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {isSignUp ? "SignUp" : "Login"}
          </Typography>
          {isSignUp && (
            <>
              <Grid
                container
                alignItems="center"
                sx={{ marginBottom: 1 }}
                spacing={1}
              >
                <Grid item xs={4}>
                  <InputLabel sx={{ marginBottom: 1 }}> UserName</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <div style={{ position: "relative" }}>
                    <TextField
                      type="text"
                      name="username"
                      {...register("username", {
                        required: true,
                        minLength: 3,
                      })}
                      variant="outlined"
                      placeholder="UserName"
                      fullWidth
                      sx={{ marginBottom: 0 }}
                    />
                    {errors.username && errors.username.type === "required" && (
                      <p
                        className="errorMsg"
                        style={{
                          color: "red",
                          position: "absolute",
                          bottom: -35,
                          left: 0,
                        }}
                      >
                        Username is required.
                      </p>
                    )}
                    {errors.username &&
                      errors.username.type === "minLength" && (
                        <p
                          className="errorMsg"
                          style={{
                            color: "red",
                            position: "absolute",
                            bottom: -35,
                            left: 0,
                          }}
                        >
                          Username should be at-least 3 characters.
                        </p>
                      )}
                  </div>
                </Grid>
              </Grid>
              <br />

              <Grid
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
                sx={{ marginBottom: 2 }}
              >
                <Grid item xs={4}>
                  <InputLabel sx={{ marginBottom: 0 }}>
                    Date of Birth
                  </InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <div style={{ position: "relative" }}>
                    <TextField
                      type="date"
                      name="dob"
                      variant="outlined"
                      fullWidth
                      {...register("dob", {
                        required: "DOB is required",
                      })}
                      sx={{ marginBottom: 0 }}
                    />
                    {errors.dob && (
                      <p
                        className="errorMsg"
                        style={{
                          color: "red",
                          position: "absolute",
                          bottom: -30,
                          left: 0,
                        }}
                      >
                        {errors.dob.message}
                      </p>
                    )}
                  </div>
                </Grid>
              </Grid>
              <br />
              <Grid
                container
                alignItems="center"
                spacing={2}
                sx={{ marginBottom: 0 }}
              >
                <Grid item xs={4}>
                  <FormLabel sx={{ marginBottom: 1 }}>Skills</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <div style={{ position: "relative", margin: "auto" }}>
                    <FormControl component="fieldset" controlId="skills">
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="JavaScript"
                              {...register("skills", {
                                required: "Please select at least one skill",
                              })}
                              sx={{ padding: 0, margin: 0 }}
                            />
                          }
                          label="JavaScript"
                          sx={{ marginLeft: 0 }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="React"
                              {...register("skills")}
                              sx={{ padding: 0, margin: 0 }}
                            />
                          }
                          label="React"
                          sx={{ marginLeft: 0 }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="Nodejs"
                              {...register("skills")}
                              sx={{ padding: 0, marginbot: 0 }}
                            />
                          }
                          label="Nodejs"
                          sx={{ marginLeft: 0 }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="Angular"
                              {...register("skills")}
                              sx={{ padding: 0, margin: 0 }}
                            />
                          }
                          label="Angular"
                          sx={{ marginLeft: 0 }}
                        />
                      </FormGroup>
                      {errors.skills && (
                        <p
                          className="errorMsg"
                          style={{
                            color: "red",
                            position: "absolute",
                            bottom: -33,
                            left: 0,
                          }}
                        >
                          {errors.skills.message}
                        </p>
                      )}
                    </FormControl>
                  </div>
                </Grid>
              </Grid>

              <br />

              <Grid
                container
                alignItems="center"
                spacing={2}
                sx={{ marginBottom: 2 }}
              >
                <Grid item xs={4}>
                  <InputLabel sx={{ marginBottom: 1 }}>Contact No</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <div style={{ position: "relative" }}>
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
                      sx={{ marginBottom: 0 }}
                    />
                    {errors.contactNo &&
                      errors.contactNo.type === "required" && (
                        <p
                          className="errorMsg"
                          style={{
                            color: "red",
                            position: "absolute",
                            bottom: -35,
                            left: 0,
                          }}
                        >
                          Contact number is required.
                        </p>
                      )}
                    {errors.contactNo &&
                      errors.contactNo.type === "pattern" && (
                        <p
                          className="errorMsg"
                          style={{
                            color: "red",
                            position: "absolute",
                            bottom: -35,
                            left: 0,
                          }}
                        >
                          Contact number should be exactly 10 digits.
                        </p>
                      )}
                  </div>
                </Grid>
              </Grid>
            </>
          )}
          <br />

          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: 1 }}
          >
            <Grid item xs={4}>
              <InputLabel sx={{ marginBottom: 0 }}>Email</InputLabel>
            </Grid>
            <Grid item xs={8}>
              <div style={{ position: "relative" }}>
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
                  sx={{ marginBottom: 1 }}
                />
                {errors.email && errors.email.type === "required" && (
                  <p
                    className="errorMsg"
                    style={{
                      color: "red",
                      position: "absolute",
                      bottom: -33,
                      left: 0,
                    }}
                  >
                    Email is required.
                  </p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p
                    className="errorMsg"
                    style={{
                      color: "red",
                      position: "absolute",
                      bottom: -33,
                      left: 0,
                    }}
                  >
                    Email is not valid.
                  </p>
                )}
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: 1 }}
          >
            <Grid item xs={4}>
              <InputLabel sx={{ marginBottom: 0 }}>Password</InputLabel>
            </Grid>
            <Grid item xs={8}>
              <div style={{ position: "relative" }}>
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
                  sx={{ marginBottom: 1 }}
                />
                {errors.password && errors.password.type === "required" && (
                  <p
                    className="errorMsg"
                    style={{
                      color: "red",
                      position: "absolute",
                      bottom: -33,
                      left: 0,
                    }}
                  >
                    Password is required.
                  </p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p
                    className="errorMsg"
                    style={{
                      color: "red",
                      position: "absolute",
                      bottom: -33,
                      left: 0,
                    }}
                  >
                    Password should be at-least 6 characters.
                  </p>
                )}
              </div>
            </Grid>
          </Grid>
          <br />
          {isSignUp && (
            <Grid
              container
              alignItems="center"
              sx={{ marginBottom: 2 }}
              spacing={1}
            >
              <Grid item xs={4}>
                <InputLabel sx={{ marginBottom: 0 }}>
                  Confirm Password
                </InputLabel>
              </Grid>
              <Grid item xs={8}>
                <div style={{ position: "relative" }}>
                  <TextField
                    type="password"
                    variant="outlined"
                    name="confirmpassword"
                    {...register("confirmpassword", {
                      required: true,
                      validate: validateConfirmPassword,
                    })}
                    placeholder="Confirm Password"
                    fullWidth
                  />
                  {errors.confirmpassword &&
                    errors.confirmpassword.type === "required" && (
                      <p
                        className="errorMsg"
                        style={{
                          color: "red",
                          position: "absolute",
                          bottom: -35,
                          left: 0,
                        }}
                      >
                        ConfirmPassword is required.
                      </p>
                    )}
                  {errors.confirmpassword && (
                    <p
                      className="errorMsg"
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: -35,
                        left: 0,
                      }}
                    >
                      {errors.confirmpassword.message}
                    </p>
                  )}
                </div>
              </Grid>
            </Grid>
          )}
          <Button
            type="Submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignUp ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={() => setisSignUp(!isSignUp)}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Change To {isSignUp ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
}
export default Authentication;
