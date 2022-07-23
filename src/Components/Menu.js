import React from "react";
import "../App.css";
import Borrador from "../images/borrador.png";
import Lapiz from "../images/lapiz.png";
const Menu = ({
	setLineColor,
	setLineWidth,
	setLineOpacity,
	setBorrador,
	borrador,
	setLapiz,
	lapiz,
	setCambiarImagen
}) => {
	return (
		<div className="Menu">
			<div className="ContainerOpcion">
				<label> Insertar una Imagen</label>
				<input
					type="file"
					id="myImagen"
					name="myImagen"
					accept="image/png, image/jpeg"
					onChange={(e) => {
						let reader = new FileReader();
						
						reader.readAsDataURL(e.target.files[0]);

						reader.onload = () => {
							console.log("entre onChange set cambiar imagen", reader.result);
							setCambiarImagen(reader.result)

						}
					}}
				/* style={{display:"none"}} */
				/>

			</div>
			<div className="ContainerOpcion">
				<label>Brush Color </label>
				<input
					type="color"
					id={"colores"}
					onChange={(e) => {
						setLineColor(e.target.value);
					}}
				/>

			</div>
			<div className="ContainerOpcion">
				<label>Brush Width </label>
				<input
					type="range"
					min="1"
					max="20"
					onChange={(e) => {
						setLineWidth(e.target.value);
					}}
				/>

			</div>
			<div className="ContainerOpcion">
				<label>Brush Opacity</label>
				<input
					type="range"
					min="1"
					max="100"
					onChange={(e) => {
						setLineOpacity(e.target.value / 100);
					}}
				/>

			</div>
			<div className="ContainerOpcion">
				<label> Limpiar</label>
				<img src={Borrador} width="50px" height="50px" onClick={() => {
					setBorrador(!borrador);
					if (lapiz) {

						setLapiz(!lapiz)
					}
				}
				}
				/>
			</div>
			<div className="ContainerOpcion">
				<label>Lapiz</label>
				<img src={Lapiz} width="50px" height="50px" onClick={() => {
					setLapiz(!lapiz)
					if (borrador) {
						setBorrador(!borrador)
					}

				}} />

			</div>

		</div>
	);
};

export default Menu;
