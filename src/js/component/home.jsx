import React from "react";
import Navbar from "./navbar";
import Content from "./content";
import Cards from "./cards";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// const TITULOS_DE_CARTA=['First card title', 'Second card title','Third card title','Fourth card title'];

	return (
		<React.StrictMode>
		<Navbar/>
		<Content/>
		<Cards/>
		</React.StrictMode>
		
	);
};
export default Home;
