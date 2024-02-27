import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { getGithubInfoLoader } from "./components/Github/Github.jsx";
import Sai from "./components/Sai/Sai.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ]); //should include the array of routes, path, and the elements they render

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="sai" element={<Sai />} />
      </Route>
      //to nest the function here, make it a normal tag like <></> and start
      nesting
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} /> //the Route gives the
      direct access to the userId from the component
      {/* <Route path="github" element={<Github />} /> */}
      <Route
        loader={getGithubInfoLoader} //loader helps you fecth the data faster, and infact you can write the entire function here
        path="github"
        element= {<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

//RouterProvider always takes a prop, and it is router mostly
