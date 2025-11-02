//1.

function cargarSistema(){
    console.log("Listo!");
}

console.log("Preparando sistema...");

setTimeout(cargarSistema, 3000);

//2.

let nombres = ["Mario", "Pedro", "Susan", "Valentina", "Rosario"]; 

nombres.forEach((nombre)=>{ 
    console.log(`Hola, ${nombre}! Bienvenido al sistema`); 
});

/* Para practicar la idea de callbacks 
dentro de callbacks, podrías combinar 
ambos ejercicios así: */

let nombres2 = ["Mario", "Pedro", "Susan", "Valentina", "Rosario"];

console.log("Cargando sistema...");

setTimeout(() => {
  nombres2.forEach((nombre) => {
    console.log(`Hola, ${nombre}! Bienvenido al sistema`);
  });
  console.log("Todos los usuarios fueron saludados");
}, 3000);