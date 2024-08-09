import React from "react";
import Navbar from "./nav_bar";
import Content from "./content";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.StrictMode>
		<Navbar/>
		<Content/>
		</React.StrictMode>
		
	);
};
export default Home;
