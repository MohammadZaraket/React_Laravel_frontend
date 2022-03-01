import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Devices from './assets/Images/devices.jpg';
import Lang from './assets/Images/lang.jpg';
import Web from './assets/Images/web.png';


function App({ children }) {
    return (
        <div className="App">
           
           <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="SignIn" element={<SignIn />} />
                <Route path="Services" element={<Services />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="SignUp" element={<SignUp />} />
            </Routes>
        </div>
    );

    function Landing() {
        return (
            <>
             <h1>Welcome to React FrontEnd Project</h1>
            <h6>What do we love most about this landing page? It's not what it doesn't have, but what it have — a navigation bar! By Clicking the navigation bar, you can check our various pages and even you can SignIn</h6>

                <main>
                  
            <Carousel fade className="carousel">
         <Carousel.Item>
    <img
      className="d-block w-100"
      src={Web}
      alt="First slide"
      height="50%"
      width="50%"
    />
    <Carousel.Caption>
      <h5>Web Development Is Rising!</h5>
      <h5>We Are In 2022</h5>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Devices}
            alt="Second slide"
            height="50%"
            width="50%"
            />

            <Carousel.Caption>
            <h5>All Is Connected</h5>
            <h5>Living In a Small World!</h5>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Lang}
            alt="Third slide"
            height="50%"
            width="50%"
            />

            <Carousel.Caption>
            <h5>Programming Languages</h5>
            <h5>Trust Me, There Is A Lot!</h5>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
                </main>
            </>
        );
    }

//ERRRRROOORRR: Uncaught TypeError: Cannot add property updater, object is not extensible
// fetch componentDidMount() and render()

};  
export default App;