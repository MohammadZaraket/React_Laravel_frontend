import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";


function App({ children }) {
    return (
        <div className="App">
           
           <Navbar />
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="SignIn" element={<SignIn />} />
                <Route path="Services" element={<Services />} />
                <Route path="Dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );

    function Home() {
        return (
            <>
                <main>
                    <h2>Welcome to the homepage!</h2>
                    <p>You can do this, I believe in you.</p>
                </main>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </>
        );
    }

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

}

export default App;

/*class App extends React.Component {

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
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				<ol>
					greeting: {items.greeting},
				</ol>
				
			}
		</div>
	);
}*/




