/* Crea un código con setTimeout() 
que muestre:
Preparando sistema...
Listo!
*/

function cargarSistema(){
    console.log("Listo!");
}

console.log("Preparando sistema...");

setTimeout(cargarSistema, 2000);

/*Crea un array con 5 nombres de 
personas y usa forEach() para mostrar 
algo así:
Hola, [nombre]! Bienvenido al sistema.

usa una función flecha como callback 
dentro del forEach(). */

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