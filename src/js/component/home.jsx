import React from "react";
import Navbar from "./navbar";
import Content from "./content";
import Cards from "./cards";
import Footer from "./footer";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const TITULOS_DE_CARTA = ['First card title', 'Second card title', 'Third card title', 'Fourth card title'];

	return (
		// la etiqueta puede tener cualquier valor
		<div className="overflow-hidden"> {/*oculta cualquier deborde de us hijos*/}
			<Navbar />
			<Content />
			<div className="d-flex justify-content-center"> {/* me funciono centrar con esto y no con la clase container de boostrap */}
				<div className="row d-flex justify-content-center">
					{TITULOS_DE_CARTA.map((item, index) =>
						<Cards key={index} titulo={item} />
					)}
				</div>
			</div>
			<Footer />
		</div>


	);
};
export default Home;
