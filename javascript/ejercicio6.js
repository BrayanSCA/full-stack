//1. 
const estudiantes = [ 
    { nombre: "Ana", nota: 7 }, 
    { nombre: "Luis", nota: 4 }, 
    { nombre: "Valentina", nota: 9 }, 
    { nombre: "Pedro", nota: 5 }, 
    { nombre: "Carla", nota: 10 }, 
]; 
const nombresEstudiantes = estudiantes.map((nom)=> nom.nombre.toUpperCase()); 
console.log(nombresEstudiantes);

//opcional
// const nombresEstudiantes = estudiantes.map(est => est.nombre.toUpperCase());

//2.
/*
const aprovados = nombresEstudiantes.filter((aprovado)=> aprovado.nota >= 6); 
console.log(aprovados);
*/

//corrección:
const aprobados = estudiantes.filter(est => est.nota >= 6);
console.log(aprobados);

//3.
/*
const estudiantePerfecto = aprovados.find((perfecto)=> perfecto.nota ===10); 
console.log(estudiantePerfecto);
*/

//correción:
const estudiantePerfecto = aprobados.find(est => est.nota === 10);
console.log(estudiantePerfecto);

//Extra
/*
function informacion (aprob, perfect) { 
    let nom = []; 
    for (i=0; i>=aprob.length; i++) { 
        nom.push(aprob.nombre[i]); 
    } 
    console.log(Los estudiantes aprobados son: ${nom}); 
    console.log(El estudiante con nota perfecta es: ${perfect.nombre}); 
}; 

informacion(aprovados, estudiantePerfecto);
*/

//corrección:
function informacion(aprob, perfect) {
  const nombres = aprob.map(est => est.nombre).join(", ");
  console.log(`Los estudiantes aprobados son: ${nombres}`);
  console.log(`El estudiante con nota perfecta es: ${perfect.nombre} 🎯`);
}

informacion(aprobados, estudiantePerfecto);
