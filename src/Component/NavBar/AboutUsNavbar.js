import React from "react";

const AboutUsNavbar = () => {
  const mystyle = {
    backgroundImage: "url('backgroundimg.jpg')",
    height: "93vh",
    padding: "50px",

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
      <br />

      <h1>Learn more about us here.</h1>

      <p style={paragraphStyle}>
        Kissan-App is a leading provider of high-quality Vegitables in our App.
        With a focus on innovation and customer satisfaction, we have been
        serving customers since 2002. Our team consists of dedicated
        professionals who are committed to delivering excellence in every aspect
        of our business.
      </p>
      <p style={paragraphStyle}>
        We pride ourselves on our ability to tailor our vegetables to meet the
        specific needs of our customers. Whether you are a regular customer then
        we have the right solutions for you.
      </p>
      <p style={paragraphStyle}>
        Kissan-App is more than just a App; we are a community. We believe in
        building strong, long-lasting relationships with our customers based on
        trust and mutual respect. Our goal is to provide you with the best
        possible experience, from your first interaction with us to long after
        you've made your purchase.
      </p>
    </div>
  );
};

export default AboutUsNavbar;
