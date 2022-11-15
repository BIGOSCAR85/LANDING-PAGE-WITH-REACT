import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
		<Navbar/>
		<div className="mx-3 mb-3">			
				<Jumbotron/>
			</div>
			<div className="container" id="box">
			<div className="card-deck d-lg-flex">
							   
				<Card />
				<Card />
				<Card />
				<Card />
				</div>				
			</div>
			<Footer/>
		</React.Fragment>
	);
};

export default Home;
