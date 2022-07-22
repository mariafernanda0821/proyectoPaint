import React from "react";
import "../App.css";
import Borrador from "../images/borrador.png";

const Menu = ({ 
	setLineColor, 
	setLineWidth,
	setLineOpacity,
}) => {
return (
	<div className="Menu">
	<label>Brush Color </label>
	<input
		type="color"
		id={"colores"}
		onChange={(e) => {
		setLineColor(e.target.value);
		}}
	/>
	<label>Brush Width </label>
	<input
		type="range"
		min="3"
		max="20"
		onChange={(e) => {
		setLineWidth(e.target.value);
		}}
	/>
	<label>Brush Opacity</label>
	<input
		type="range"
		min="1"
		max="100"
		onChange={(e) => {
		setLineOpacity(e.target.value / 100);
		}}
	/>
	<label>Borrador</label>
	<a href="#" /* onChange={(e)=> borrador(e)} */><img src={Borrador} width="50px" height="50px" /></a>
	</div>
);
};

export default Menu;
