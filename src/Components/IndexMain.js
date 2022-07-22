import React from 'react';
//import MapsReactjs from './Components/Amcharts/MapsReact';
import Amcharts from './Components/Amcharts/Amcharts';



const ContainerImages = () => {
	var color = "#000000";
	var tamano = 10;
	var pintura = false;
	function pintar(event) {
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		var x = event.clientX - 10;
		var y = event.clientY + 15;
		if (pintura) {
			ctx.fillStyle = color;
			ctx.fillRect(x, y, tamano, tamano);
		}
	}
	function activar() {
		pintura = true;
	}
	function desactivar() {
		pintura = false;
	}

	function borrador() {
		document.getElementById("canvas").style.cursor = "url('http://reciclay.com.ve/gio/borradorcursor.png'), default";
		color = "#FFFFFF";
		document.getElementById("colores").setAttribute("disabled", "");
	}

	function lapiz() {
		document.getElementById("canvas").style.cursor = "url('http://reciclay.com.ve/gio/lapizcursor.gif'), default";
		color = document.getElementById("colores").value;
		document.getElementById("colores").removeAttribute("disabled");
	}
	function scolor() {
		color = document.getElementById("colores").value;
	}
	function stamano(numero) {
		tamano = numero;
	}

	function guardari() {
		var canvas = document.getElementById("canvas");
		var imagen = canvas.toDataURL("image/png");
		this.href = imagen;
	}


	return (
		<div>
			<table>
				<tr>
					<td>
						<canvas width="500" height="500" id="canvas" onmousemove="pintar(event);" onmousedown="activar();" onmouseup="desactivar();"></canvas></td>
					<td class="herramientas">
						<a href="#" onclick="lapiz();"><img src="http://reciclay.com.ve/gio/lapiz.png" /></a>
						<a href="#" onclick="borrador();"><img src="http://reciclay.com.ve/gio/borrador.png" /></a>
						<div style="width: 10px; height: 10px;" onclick="stamano(10);"></div><br />
						<div style="width: 20px; height: 20px;" onclick="stamano(20);"></div><br />
						<div style="width: 30px; height: 30px;" onclick="stamano(30);"></div><br />
						<div style="width: 40px; height: 40px;" onclick="stamano(40);"></div><br />
						<input type="color" id="colores" onchange="scolor();" />
						<a href="#" download="canvas.png" id="guardarimagen" >Guardar como imagen</a>
					</td>
				</tr>
			</table>
			<script>
				document.getElementById("guardarimagen").addEventListener("click", guardari, false);
			</script>
		</div>
	);
}

export default ContainerImages;
/* 
<table>
			<tr>
				<td>
		  <canvas width="500" height="500" id="canvas" 
		  onmousemove="pintar(event);" 
		  onmousedown="activar();" 
		  onmouseup="desactivar();">
		  </canvas>
		</td>
				<td class="herramientas">
					<a href="#" onclick="lapiz();"><img src="http://reciclay.com.ve/gio/lapiz.png" /></a>
					<a href="#" onclick="borrador();"><img src="http://reciclay.com.ve/gio/borrador.png" /></a>
					<div style="width: 10px; height: 10px;" onclick="stamano(10);"></div><br />
					<div style="width: 20px; height: 20px;" onclick="stamano(20);"></div><br />
					<div style="width: 30px; height: 30px;" onclick="stamano(30);"></div><br />
					<div style="width: 40px; height: 40px;" onclick="stamano(40);"></div><br />
					<input type="color" id="colores" onchange="scolor();"/>
					<a href="#" download="canvas.png" id="guardarimagen" >Guardar como imagen</a>
				</td>
			</tr>
		</table>
		<script>
			document.getElementById("guardarimagen").addEventListener("click", guardari, false);
		</script> */