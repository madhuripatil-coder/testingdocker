import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import "../../App.css";

const Navbar = () => {
  const NavbarTitle = {
    color: "white",
    textDecoration: "none",
    fontSize: "30px",
  };

  const data = useSelector((state) => state);
  const cartCount = data.cartItem.cartCount;

  return (
    <AppBar position="static">
      <Helmet>
        <title>My App</title>
      </Helmet>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component={NavLink} to="/" style={NavbarTitle}>
          My App
        </Typography>
        <div style={{ display: "flex", gap: "20px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "blue" : "",
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
            })}
          >
            <Button color="inherit" sx={{ fontSize: "20px" }}>
              Home
            </Button>
          </NavLink>
          <NavLink
            to="/aboutus"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "blue" : "",
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
            })}
          >
            <Button color="inherit" sx={{ fontSize: "20px" }}>
              About Us
            </Button>
          </NavLink>
          <NavLink
            to="/contactus/"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "tblue" : "",
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
            })}
          >
            <Button color="inherit" sx={{ fontSize: "20px" }}>
              Contact Us
            </Button>
          </NavLink>
          {/* <NavLink
            to="/users"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "blue" : "",
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
            })}
          >
            <Button color="inherit" sx={{ fontSize: "20px" }}>
              Users
            </Button>
          </NavLink> */}
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "blue" : "",
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
            })}
          >
            <Button color="inherit" sx={{ fontSize: "20px" }}>
              Login
            </Button>
          </NavLink>
          <NavLink
            to="/cartDetails"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "blue" : "",
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
            })}
          >
            <Button color="inherit" sx={{ fontSize: "20px" }}>
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Helmet } from "react-helmet";
// import "../../App.css";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const NavbarTitle = {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "30px",
//   };
//   //   const NavbarLink = {
//   //     color: "white",
//   //     textDecoration: "none",
//   //     fontSize: "24px",
//   //   };

//   const data = useSelector((state) => state);
//   console.log("data in navbar", data);
//   return (
//     <AppBar position="static">
//       <Helmet>
//         <title>My App</title>
//       </Helmet>
//       <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography
//           variant="h6"
//           component={NavLink}
//           to="/"
//           exact
//           style={NavbarTitle}
//         >
//           My App
//         </Typography>
//         <div style={{ display: "flex", gap: "20px" }}>
//           <NavLink
//             to="/"
//             exact
//             style={({ isActive }) => {
//               return (
//                 { backgroundColor: isActive ? "lightblue" : "" },
//                 {
//                   color: "white",

//                   textDecoration: "none",
//                   fontSize: "24px",
//                 }
//               );
//             }}
//           >
//             <Button color="inherit" sx={{ fontSize: "20px" }}>
//               Home
//             </Button>
//           </NavLink>
//           <NavLink
//             to="/aboutus"
//             style={({ isActive }) => {
//               return (
//                 { backgroundColor: isActive ? "lightblue" : "" },
//                 {
//                   color: "white",

//                   textDecoration: "none",
//                   fontSize: "24px",
//                 }
//               );
//             }}
//           >
//             <Button color="inherit" sx={{ fontSize: "20px" }}>
//               About Us
//             </Button>
//           </NavLink>
//           <NavLink
//             to="/contactus/"
//             style={({ isActive }) => {
//               return (
//                 { backgroundColor: isActive ? "lightblue" : "" },
//                 {
//                   color: "white",

//                   textDecoration: "none",
//                   fontSize: "24px",
//                 }
//               );
//             }}
//           >
//             <Button color="inherit" sx={{ fontSize: "20px" }}>
//               Contact Us
//             </Button>
//           </NavLink>
//           <NavLink
//             to="/users"
//             style={({ isActive }) => {
//               return (
//                 { backgroundColor: isActive ? "lightblue" : "" },
//                 {
//                   color: "white",

//                   textDecoration: "none",
//                   fontSize: "24px",
//                 }
//               );
//             }}
//           >
//             <Button color="inherit" sx={{ fontSize: "20px" }}>
//               Users
//             </Button>
//           </NavLink>
//           <NavLink
//             to="/login"
//             style={({ isActive }) => {
//               return (
//                 { backgroundColor: isActive ? "lightblue" : "" },
//                 {
//                   color: "white",

//                   textDecoration: "none",
//                   fontSize: "24px",
//                 }
//               );
//             }}
//           >
//             <Button color="inherit" sx={{ fontSize: "20px" }}>
//               Login
//             </Button>
//           </NavLink>
//           <NavLink
//             to="/cartDetails"
//             style={({ isActive }) => {
//               return (
//                 { backgroundColor: isActive ? "lightblue" : "" },
//                 {
//                   color: "white",

//                   textDecoration: "none",
//                   fontSize: "24px",
//                 }
//               );
//             }}
//           >
//             <Button color="inherit" sx={{ fontSize: "20px" }}>
//               Cart{data.cartItem.cartCount}
//             </Button>
//           </NavLink>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// // import React from "react";
// // import { NavLink } from "react-router-dom";
// // import AppBar from "@mui/material/AppBar";
// // import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// // import Button from "@mui/material/Button";
// // import { Helmet } from "react-helmet";
// // import "../../App.css";
// // import { Title } from "@mui/icons-material";

// // const Navbar = () => {
// //   const NavbarTitle = {
// //     color: "White",
// //     textDecoration: "none",
// //   };
// //   const Navbar = {
// //     color: "White",
// //     textDecoration: "none",
// //     display: "flex",
// //     justifyContent: "space-between",
// //     gap: "150px",
// //   };
// //   return (
// //     <AppBar position="static">
// //       <Toolbar
// //         className="navbar"
// //         style={{
// //           padding: "0 20px",

// //           display: "flex",
// //           justifyContent: "space-between",
// //           fontSize: "24px",
// //         }}
// //       >
// //         <div style={{ display: "flex", gap: "20px", color: "black" }}>
// //           <NavLink
// //             color="white"
// //             className="nav-bar-link"
// //             to="/"
// //             exact
// //             style={Navbar}
// //           >
// //             Home
// //           </NavLink>
// //           <NavLink
// //             color="white"
// //             className="nav-bar-link"
// //             to="/aboutus"
// //             style={Navbar}
// //           >
// //             About Us
// //           </NavLink>
// //           <NavLink
// //             color="white"
// //             className="nav-bar-link"
// //             to="/contactus"
// //             style={Navbar}
// //           >
// //             Contact Us
// //           </NavLink>
// //         </div>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;
