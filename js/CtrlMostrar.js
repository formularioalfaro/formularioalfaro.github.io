"use strict";
var forma = document.getElementById("forma");


var salidaBoleta=document.getElementById("salidaBoleta"),
    salidaNombre=document.getElementById("salidaNombre"),
    salidaGrupo=document.getElementById("salidaGrupo"),
    salidaMateria=document.getElementById("salidaMateria"),
    salidaFecha=document.getElementById("salidaFecha");


function procesa(){
  var boleta= forma["boleta"].value;
  var nombre= forma["nombre"].value;
  var grupo= forma["grupo"].value;
  var materia= forma["materia"].value;
  var fecha= forma["fecha"].value;
  
  salidaBoleta.textContent ="La boleta es:  "+boleta;
  salidaNombre.textContent ="El nombre es:  "+nombre;
  salidaGrupo.textContent ="El grupo es:  "+grupo;
  salidaMateria.textContent ="La materia es:  "+materia;
  salidaFecha.textContent=`La fecha es:${fecha}`; 
}

