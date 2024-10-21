import React from "react";
import Product from "./Product";

const HomeNavbar = () => {
  const mystyle = {
    backgroundImage: "url('backgroundimg.jpg')",

    padding: "50px",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const paragraphStyle = {
    margin: "0",
    padding: "10px",
    fontSize: "1.2em",
    lineHeight: "1.8",

    // borderLeft: "4px solid #007BFF",
    // borderRadius: "4px",
  };

  return (
    <div style={mystyle}>
      {/* <h1>Home Page</h1> */}
      <br />

      <h1>Welcome to the Veggies App!</h1>
      <p style={paragraphStyle}>
        Welcome to our website, where we strive to bring you the best in vegies.
        At kissan app, we are dedicated to providing high-quality of vegetables
        tailored to meet your unique needs. With years of experience in the
        industry, our team of experts works tirelessly to innovate and improve
        our offerings, ensuring that you always receive the best solutions
        available. Whether you are looking for Vegies, seeking advice, or just
        browsing, we are here to support and guide you every step of the way.
      </p>
      <Product />
    </div>
  );
};

export default HomeNavbar;
