import React from "react";
import  { useState } from "react";
import '../../styles/index.css'
//include images into your bundle


//create your first component
const Home = () => {
	const [ luzColor, setLuzColor] = useState("rojo")
	return (
		<div className="contenedor">

			<div className="cable"></div>
			
			<div className="caja-principal">
				<div className={"color rojo " + (luzColor=="rojo" ? "on" : "")} onClick={() => setLuzColor("rojo")}></div>
				<div className={"color amarillo " + (luzColor=="amarillo" ? "on" : "")} onClick={() => setLuzColor("amarillo")}></div>
				<div className={"color verde " + (luzColor=="verde" ? "on" : "")} onClick={() => setLuzColor("verde")}></div>
			</div>
            

			
		</div>
	);
};

export default Home;