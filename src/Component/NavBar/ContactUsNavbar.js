import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ContactUsNavbar = () => {
  const mystyle = {
    backgroundImage: "url('/backgroundimg.jpg')",
    height: "93vh",
    padding: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    textAlign: "left",
  };

  const paragraphStyle = {
    margin: "0",
    padding: "10px",
    fontSize: "1.2em",
    lineHeight: "1.8",
    textAlign: "left",
  };

  const listStyle = {
    marginLeft: "0",
    padding: "10px",
    fontSize: "1.2em",
    lineHeight: "1.8",
    textAlign: "left",
  };

  const navLinkStyle = {
    color: "blue",
    textDecoration: "none",
    fontSize: "18px",
    textAlign: "left",
    display: "block",
    fontWeight: "bold",
  };

  const activeLinkStyle = {
    ...navLinkStyle,
    color: "Red",
  };

  return (
    <div style={mystyle}>
      <h1>Get in touch with us here.</h1>
      <p style={paragraphStyle}>
        Thank you for your interest in our App. If you have any questions about
        our products, services, or would like to provide feedback, please feel
        free to contact us. We would love to hear from you!
      </p>
      <ul style={listStyle}>
        <li>
          <strong>Address:</strong> 123 Main Street, City, State, Zip Code
        </li>
        <li>
          <strong>Phone:</strong> +1 (123) 456-7890
        </li>
        <li>
          <strong>Email:</strong> info@yourcompany.com
        </li>
      </ul>
      <div className="nested">
        <h1>Connect With This Social Media Links. </h1>
        <NavLink
          to="youtube"
          style={({ isActive }) => (isActive ? activeLinkStyle : navLinkStyle)}
        >
          Youtube
        </NavLink>
        <br />
        <NavLink
          to="twitter"
          style={({ isActive }) => (isActive ? activeLinkStyle : navLinkStyle)}
        >
          Twitter
        </NavLink>
        <br />
        <NavLink
          to="facebook"
          style={({ isActive }) => (isActive ? activeLinkStyle : navLinkStyle)}
        >
          FaceBook
        </NavLink>
        <br />
        <NavLink
          to="github"
          style={({ isActive }) => (isActive ? activeLinkStyle : navLinkStyle)}
        >
          GitHub
        </NavLink>
      </div>
      <br />
      <Outlet />
    </div>
  );
};

export default ContactUsNavbar;

// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";

// const ContactUsNavbar = () => {
//   const mystyle = {
//     backgroundImage: "url('backgroundimg.jpg')",
//     height: "93vh",
//     padding: "50px",

//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//   };
//   const paragraphStyle = {
//     margin: "0",
//     padding: "10px",
//     fontSize: "1.2em",
//     lineHeight: "1.8",
//     // textAlign: "left",
//   };
//   const listStyle = {
//     marginleft: "0",
//     padding: "10px",
//     fontSize: "1.2em",
//     lineHeight: "1.8",
//     textAlign: "left",
//   };
//   const navLinkStyle = {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "24px",
//   };
//   const activeLinkStyle = {
//     color: "lightblue",
//     ...navLinkStyle,
//   };

//   return (
//     <div style={mystyle}>
//       <br />

//       <h1>Get in touch with us here.</h1>

//       <p style={paragraphStyle}>
//         Thank you for your interest in our App. If you have any questions about
//         our products, services, or would like to provide feedback, please feel
//         free to contact us. We would love to hear from you!
//       </p>
//       <ul style={listStyle}>
//         <li>
//           <strong>Address:</strong> 123 Main Street, City, State, Zip Code
//         </li>
//         <li>
//           <strong>Phone:</strong> +1 (123) 456-7890
//         </li>
//         <li>
//           <strong>Email:</strong> info@yourcompany.com
//         </li>
//       </ul>
//       <div className="nested">
//         <NavLink
//           to="youtube"
//           style={({ isActive }) => {
//             return (
//               { Color: isActive ? "lightblue" : "black" },
//               {
//                 color: "white",

//                 textDecoration: "none",
//                 fontSize: "24px",
//               }
//             );
//           }}
//         >
//           Youtube
//         </NavLink>
//         <br />
//         <NavLink
//           to="twitter"
//           style={({ isActive }) => {
//             return (
//               { Color: isActive ? "lightblue" : "black" },
//               {
//                 color: "white",

//                 textDecoration: "none",
//                 fontSize: "24px",
//               }
//             );
//           }}
//         >
//           Twitter
//         </NavLink>
//         <br />
//         <NavLink
//           to="facebook"
//           style={({ isActive }) => {
//             return (
//               { Color: isActive ? "lightblue" : "black" },
//               {
//                 color: "white",

//                 textDecoration: "none",
//                 fontSize: "24px",
//               }
//             );
//           }}
//         >
//           FaceBook
//         </NavLink>
//         <br />
//         <NavLink
//           to="github"
//           style={({ isActive }) => {
//             return (
//               { Color: isActive ? "lightblue" : "black" },
//               {
//                 color: "white",

//                 textDecoration: "none",
//                 fontSize: "24px",
//               }
//             );
//           }}
//         >
//           GitHub
//         </NavLink>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

// export default ContactUsNavbar;
