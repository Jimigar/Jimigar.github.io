var xmlhttp = new XMLHttpRequest();
var url = "js/contenido.json";
var arr;
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		arr = JSON.parse(this.responseText);
	}
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(id){
	var i;
	var tabla = document.createElement("table");
	tabla.setAttribute("class","tabli");
	
	var titutab = document.createElement("tr");
	tabla.appendChild(titutab);
	var f = document.createElement("td");
	titutab.appendChild(f);
	var titulo = document.createElement("h2");
	f.appendChild(titulo);
	var ti = document.createTextNode(arr[id].title);	
	titulo.appendChild(ti);
	
	var titutab2 = document.createElement("tr");
	tabla.appendChild(titutab2);
	var f2 = document.createElement("td");
	titutab2.appendChild(f2);
	var fecha = document.createElement("p");
	f2.appendChild(fecha);
	var fe = document.createTextNode(arr[id].date);	
	fecha.appendChild(fe);
	
	var titutab3 = document.createElement("tr");
	tabla.appendChild(titutab3);
	var f3 = document.createElement("td");
	titutab3.appendChild(f3);
	var descripcion = document.createElement("p");
	f3.appendChild(descripcion);
	var de = document.createTextNode(arr[id].description);	
	descripcion.appendChild(de);
	
	var titutab4 = document.createElement("tr");
	tabla.appendChild(titutab4);
	var f4 = document.createElement("td");
	titutab4.appendChild(f4);
	var miembros = document.createElement("p");
	f4.appendChild(miembros);
	var mi = document.createTextNode("-Miembros: " +arr[id].members);	
	miembros.appendChild(mi);
	
	var titutab5 = document.createElement("tr");
	tabla.appendChild(titutab5);
	var f5 = document.createElement("td");
	titutab5.appendChild(f5);
	var relacionado = document.createElement("p");
	f5.appendChild(relacionado);
	var re = document.createTextNode("-Asignaturas relacionadas: " +arr[id].relations);	
	relacionado.appendChild(re);
	
	var titutab6 = document.createElement("tr");
	tabla.appendChild(titutab6);
	var f6 = document.createElement("td");
	titutab6.appendChild(f6);
	var responsive = document.createElement("p");
	f6.appendChild(responsive);
	var res = document.createTextNode("-Responsive: " + arr[id].responsive);	
	responsive.appendChild(res);
	
	var titutab7 = document.createElement("tr");
	tabla.appendChild(titutab7);
	var f7 = document.createElement("td");
	titutab7.appendChild(f7);
	var recomendado = document.createElement("p");
	f7.appendChild(recomendado);
	var rec = document.createTextNode("-Resolución recomendada: " + arr[id].recdisplay);	
	recomendado.appendChild(rec);
	
	var titutab8 = document.createElement("tr");
	tabla.appendChild(titutab8);
	var f8 = document.createElement("td");
	titutab8.appendChild(f8);
	var url = document.createElement("a");
	url.setAttribute("href",arr[id].url)>
	f8.appendChild(url);
	var ur = document.createTextNode("Acceder Página Web");	
	url.appendChild(ur);

	var imagen = document.createElement("img");
	imagen.setAttribute("src",arr[id].image);
	imagen.setAttribute("class","muestra");
	
	document.getElementById("prueba").appendChild(tabla);
	document.getElementById("prueba").appendChild(imagen);

	
	
}

function myFunctionOut() {	
	var ele = document.getElementById("prueba");
	document.getElementById("pruebi").removeChild(ele);
	var elemento = document.createElement("div");
	elemento.setAttribute("id","prueba");
	document.getElementById("pruebi").appendChild(elemento);
}