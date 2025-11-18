//3-A
/* const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 5 },
  { nombre: "Maria", nota: 10 },
  { nombre: "Pedro", nota: 3 }
];

const resultados = estudiantes.reduce((acum, est)=> {
  let aprobados = [];
  let reprobados = [];
  est.nota >= 5 ? acum[aprobados].push(est) : acum[reprobados].push(est);
  return acum
}, {});

console.log(`3-A: ${resultados}`); */

//Corrección:
const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 5 },
  { nombre: "Maria", nota: 10 },
  { nombre: "Pedro", nota: 3 }
];

const resultados = estudiantes.reduce((acum, est)=> {
  if(!acum.aprobados) acum.aprobados = [];
  if(!acum.reprobados) acum.reprobados = [];

  est.nota >= 6
  ? acum.aprobados.push(est)
  : acum.reprobados.push(est);

  return acum;
}, {});

console.log("3-A: ", resultados);

//Versión más limpia
/*
const resultados = estudiantes.reduce((acum, est) => {
  const categoria = est.nota >= 6 ? "aprobados : reprobados";
  acum[categoria].push(est);
  return acum;
}, { aprobados: [], reprobados: [] });
*/

//3-B
const numeros = [3, 10, 7, 20, 8, 5];

const estadisticas = numeros.reduce((acum, num)=> {
  let contador = [num];
  let sumar = acum + num;
  let dividir = sumar / contador;
  let menor = Math.min(contador);
  let mayor = Math.max(contador);
  acum[suma].push(suma);
  acum[promedio].push(dividir);
  acum[minimo].push(menor);
  acum[maximo].push(mayor);
  return acum;
}, { suma:"", promedio:"", minimo:"", maximo:"" });

console.log("3-B: ", estadisticas);