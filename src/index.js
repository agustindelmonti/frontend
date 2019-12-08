import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import MapView from "./pages/GoogleMaps";
import Login from "./pages/login.js";
import SignUp from "./pages/signup";
import Interest from "./pages/interests";
import Trip from "./pages/trip";
import NotFoundPage from "./pages/404";
import LandingPage from "./pages/LandingPage";

//ReactDOM.render(<Login />, document.getElementById("root"));
//ReactDOM.render(<SignUp />, document.getElementById("root"));
//ReactDOM.render(<MapView />, document.getElementById("root"));
//ReactDOM.render(<Interest />, document.getElementById("root"));
//ReactDOM.render(<Trip/>, document.getElementById("root"));
//ReactDOM.render(<NotFoundPage />, document.getElementById("root"));
ReactDOM.render(<LandingPage />, document.getElementById("root"));
