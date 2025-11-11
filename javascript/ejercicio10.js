let estudiantes = [
  { nombre: "Ronaldo", nota: 9 },
  { nombre: "Pablito", nota: 7 },
  { nombre: "Ronaldinho", nota: 9 }, 
];

function agregarEstudiante(nombre, nota) {
  estudiantes.push(
    { nombre: nombre, nota: nota });
    console.log(`Se agregó: ${nombre} (${nota})`);
}

agregarEstudiante("Ana", 8);
agregarEstudiante("Luis", 5);
agregarEstudiante("Valentina", 10);

const sumaNotas = estudiantes.reduce((acumulador, iterador) => {
  return acumulador + iterador.nota;
}, 0);

const promedio = sumaNotas / estudiantes.length;

const listaOrdenada = () => {
  return estudiantes.sort((a, b) => a.nota - b.nota);
}

const arrayOrdenado = listaOrdenada();

const listaEstudiantes = arrayOrdenado
  .map(est=> {
    return `${est.nombre} (${est.nota})`
  })
  .join(", ");

const notaMaxima = Math.max(...arrayOrdenado.map(est=> est.nota));
const mejorEstudiante = arrayOrdenado.find(est => est.nota === notaMaxima);

/*Alternativa
const mejorEstudiante = arrayOrdenado.reduce(mejorActual, estudianteSiguiente) => {
  //si la nota del siguiente es mayor, quédatelo. Si no, mantén el mejor el mejor actual.
  return estudianteSiguiente.nota > mejorActual.nota ? estudianteSiguiente : mejorActual;
});*/

const estudiantesReprobados = arrayOrdenado.filter(est=> est.nota <= 5);
const listaReprobados = estudiantesReprobados
  .map(est => {
    return `${est.nombre} (${est.nota})`
  })
  .join(", ");

const mostrarResumen = () => {
  console.log(listaEstudiantes);
  console.log(`Promedio general: ${promedio}`);
  console.log(`El mejor estudiante es: ${mejorEstudiante.nombre} con ${mejorEstudiante.nota} puntos.`);
  console.log(`Los estudiantes reprobados son: ${listaReprobados}`);
}

mostrarResumen();