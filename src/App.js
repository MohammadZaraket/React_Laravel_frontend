import React from "react";
import './App.css';

const App = ({children}) => {
    return (
        <div style={{height:'100vh'}}>

            <h1>HI FROM APPPP</h1>
            
        </div>
    );
};

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




