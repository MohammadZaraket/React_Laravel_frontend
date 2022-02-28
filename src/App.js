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
import Devices from './assets/Images/devices.png';
import Lang from './assets/Images/lang.png';
import Web from './assets/Images/web.png';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material/';


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
            <p>What do we love most about this landing page? It's not what it doesn't have, but what it have — a navigation bar! By Clicking the navigation bar, you can check our various pages and even you can SignIn</p>

                <main>
                  
            <Grid container spacing={1} >
              <Grid item xs={12}>
                  
            <Carousel fade className="carousel">
         <Carousel.Item>
    <img
      className="d-block w-100"
      src={Web}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Web Development Is Rising!</h3>
      <p>We Are In 2022</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Devices}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>All Is Connected</h3>
            <p>Living In a Small World!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Lang}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Programming Languages</h3>
            <p>Trust Me, There Is A Lot!</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </Grid>
        </Grid>
                </main>

            </>
        );
    }
/*
    function About() {
        return (
            <>
                <main>
                    <h2>Who are we?</h2>
                    <p>
                        That feels like an existential question, don't you
                        think?
                    </p>
                </main>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </>
        );
    }

}*/



/*className App extends React.Component {

    constructor(props) {

        return(

            <h1>Hi from APP</h1>
        ) 
    
	
	}
}
export default App;

ERRRRROOORRR: Uncaught TypeError: Cannot add property updater, object is not extensible
*/


	/*constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("http://127.0.0.1:8000/api/greeting")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div classNameName = "App">
			<h1> Fetch data from an api in react </h1> {
				<ol>
					greeting: {items.greeting},
				</ol>
				
			}
		</div>
	);
}*/

};  
export default App;