const estudiantes = [
    { nombre: "Carla", nota: 8 },
    { nombre: "Luis", nota: 5 },
    { nombre: "María", nota: 9 },
    { nombre: "Pedro", nota: 6 },
    { nombre: "Valentina", nota: 10 },
    { nombre: "Andrés", nota: 4 },
];

//1.
/* const listaEstudiantes = estudiantes.map(est => {
    return `${est.nombre} (${est.nota})`
});
 */
//corrección visual:
const listaEstudiantes = estudiantes.map(est => `${est.nombre} (${est.nota})`).join(", ");

//2.
const aprobados = estudiantes.filter(aprob => aprob.nota >= 6);
const nombresAprobados = aprobados.map(est => est.nombre)
//3.
const mejorEstudiante = estudiantes.find(mejor => mejor.nota === 10);

//4.
const sumaNotas = estudiantes.reduce((a, b) => {
    return a + b.nota;
}, 0);
const promedio = sumaNotas / estudiantes.length;

console.log(`Lista de estudiantes: ${listaEstudiantes}`);
console.log(`Aprobados: ${nombresAprobados}`);
console.log(`El mejor estudiante es: ${mejorEstudiante.nombre} con una nota de ${mejorEstudiante.nota}`);
console.log(`El promedio general del curso es: ${promedio}`);

//5.
const agregarEstudiante = (nombre, nota) => {
    estudiantes.push(`{nombre: ${nombre}, nota: ${nota}}`);
    console.log(`Lista de estudiantes: ${listaEstudiantes}`);
    console.log(`Aprobados: ${nombresAprobados}`);
    console.log(`El mejor estudiante es: ${mejorEstudiante.nombre} con una nota de ${mejorEstudiante.nota}`);
    console.log(`El promedio general del curso es: ${promedio}`);
};


