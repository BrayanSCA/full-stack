//1. 
function calculadora(a, b, operacion) {
  const resultado = operacion(a, b);
  console.log(`El resultado es: ${resultado}`);
}

const sumar = (a, b) => a+b;
const restar = (a, b) => a-b;
const multiplicar = (a, b) => a*b;

calculadora(2, 10, sumar);
calculadora(15, 5, restar);
calculadora(6, 7, multiplicar);

//Calificacion: 10/10

console.log("***********")

//2.
/* function crearSaludo(nombre, h) {
	const hora = h;
	return hora
}

const horario = (h) => {
	if (h>=6 && h<=11){
		return "Buenos días"
	} else if (h>=12 && h<=18){
		return "Buenas tardes"
	} else if ((h>=19 && h<=23) || (h>=0 && h<=5)){
		return "Buenas noches"
	} else {
		console.log("ingrese una hora válida formato 24hrs");
	}
}
 */
//Calificacion: 8,5/10
//corrección:
function crearSaludo(nombre) {
  return function(hora) {
    if (hora >= 6 && hora <= 11) {
      return `Buenos días, ${nombre}`;
    } else if (hora >= 12 && hora <= 18) {
      return `Buenas tardes, ${nombre}`;
    } else if ((hora >= 19 && hora <= 23) || (hora >= 0 && hora <= 5)) {
      return `Buenas noches, ${nombre}`;
    } else {
      return "Hora inválida (usa formato 24h)";
    }
  };
}

console.log("********");

//3.
/*function procesarEdad(edad, callback){
	if (isNaN(edad)){
		console.log("Edad invalida");
	} else {
		return callback(edad);
	}
}

function verificarEdad(edad) {
	if(edad>=18){
		return "Mayor de edad"
	} else {
		return "Menor de edad"
	}
}

procesarEdad(20, verificarEdad);
*/

//Calificación: 9/10
//corrección
function procesarEdad(edad, callback){
  if (isNaN(edad)){
    console.log("Edad inválida");
  } else {
    const resultado = callback(edad);
    console.log(resultado);
  }
}

function verificarEdad(edad) {
  return edad >= 18 ? "Mayor de edad" : "Menor de edad";
}

procesarEdad(20, verificarEdad); // → Mayor de edad
procesarEdad(15, verificarEdad); // → Menor de edad
procesarEdad("abc", verificarEdad); // → Edad inválida