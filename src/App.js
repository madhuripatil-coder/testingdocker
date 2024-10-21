import "./App.css";
// import Signup from "./Component/Signup";
// import Login from "./Component/Login";
// import Authentication from "./Component/Authentication";
// import UsestateExample from "./Component/UsestateExample";
// import UseContextExample from "./Component/UseContextExample";
import { createContext } from "react";
// import HigherOrderCompoent from "./Component/HigherOrderCompoent";
// import HOCComponent from "./Component/HOCComponent";
// import Home from "./Component/SearchHOCComponent/Home";
// import About from "./Component/SearchHOCComponent/About";
// import Contact from "./Component/SearchHOCComponent/Contact";
// import Services from "./Component/SearchHOCComponent/Services";

//import UserContext2 from "./Component/UserContext2";
// import UseEffectExample from "./Component/UseEffectExample";
// import UseEffectSec from "./Component/UseEffectSec";
// import UseMemoExample from "./Component/UseMemoExample";
// import UseRefExample from "./Component/UseRefExample";
// import UseCallbackExample from "./Component/UseCallbackExample";
// import ExamplePureComponent from "./Component/ExamplePureComponent";
// import UncontrolledComponent from "./Component/UncontrolledComponent";
// import ControlledCoponent from "./Component/ControlledCoponent";
// import HomeWithSearch from "./Component/SearchHOCComponent/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavBar/Navbar";
import HomeNavbar from "./Component/NavBar/HomeNavbar";
import ContactUsNavbar from "./Component/NavBar/ContactUsNavbar";
import AboutUsNavbar from "./Component/NavBar/AboutUsNavbar";
import ErrorPage from "./Component/NavBar/ErrorPage";
import UserDetails from "./Component/NavBar/UserDetails";
import Users from "./Component/NavBar/Users";
import YouTube from "./Component/NavBar/YouTube";
import Twitter from "./Component/NavBar/Twitter";
import FaceBook from "./Component/NavBar/FaceBook";
import GitHub from "./Component/NavBar/GitHub";
import Login from "./Component/NavBar/Login";
import Protected from "./Component/NavBar/Protected";
import Registration from "./Component/NavBar/Registration";
//import LearnPropDrilling from "./Component/PropDrilling/LearnPropDrilling";
//import Counter from "./Component/PropDrilling/Counter";

//import ComponentApp from "./Component/UseContext/ComponentApp";
//import CounterContext from "./Component/CounterContext/CounterContext";

import CartDetails from "./Component/NavBar/CartDetails";

// const data = createContext();
const data1 = createContext();
function App() {
  // const name = "Madhuri";
  // const UserData = {
  //   Name: "Madhuri",
  //   Email: "madhuri@gmail.com",
  // };

  // const [selectedComponent, setSelectedComponent] = useState(null);

  // const renderComponent = () => {
  //   switch (selectedComponent) {
  //     case "Home":
  //       return <Home />;
  //     case "About":
  //       return <About />;
  //     case "Contact":
  //       return <Contact />;
  //     case "Services":
  //       return <Services />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="App">
      {/* <Signup />
      <Login /> */}
      {/* <Authentication /> */}
      {/* <UsestateExample /> */}

      {/* <data.Provider value={name}>
        <UseContextExample />
      </data.Provider> */}
      {/* <data1.Provider value={UserData}>
        <UserContext2 />
      </data1.Provider> */}

      {/* <UseEffectExample />
      <UseEffectSec /> */}
      {/* <UseRefExample />
      <UseCallbackExample /> */}

      {/* <ExamplePureComponent />
      <ControlledCoponent />
      <UncontrolledComponent />
      <UseMemoExample /> */}
      {/* <HigherOrderCompoent />
      <HOCComponent /> */}

      {/* <h1>App with HOC search</h1>
      <Home />
      <About />
      <Contact />
      <Services /> */}

      {/* <div>
        <h1>This App is Searching Item from DropDown</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "20px",
            marginTop: "50px",
          }}
        >
          <button onClick={() => setSelectedComponent("Home")}>Home</button>
          <button onClick={() => setSelectedComponent("About")}>About</button>
          <button onClick={() => setSelectedComponent("Contact")}>
            Contact
          </button>
          <button onClick={() => setSelectedComponent("Services")}>
            Services
          </button>
        </div>
        <br />
        <br />
        {renderComponent()}
      </div> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Protected Component={HomeNavbar} />}
          ></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route
            path="/aboutus"
            element={<Protected Component={AboutUsNavbar} />}
          ></Route>

          <Route
            path="/contactus/"
            element={<Protected Component={ContactUsNavbar} />}
          >
            <Route path="youtube" element={<YouTube />} />
            <Route path="twitter" element={<Twitter />} />
            <Route path="facebook" element={<FaceBook />} />
            <Route path="github" element={<GitHub />} />
          </Route>
          <Route path="/users" element={<Protected Component={Users} />}>
            Users
          </Route>
          <Route path="/users/:name" element={<UserDetails />}></Route>
          <Route
            path="/cartDetails"
            element={<Protected Component={CartDetails} />}
          >
            Cart
          </Route>

          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <LearnPropDrilling />
      <Counter /> */}
      {/* <ComponentApp /> */}
      {/* <CounterContext /> */}
    </div>
  );
}

export default App;
export { data1 };
