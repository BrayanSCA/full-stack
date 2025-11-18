//2-A
/* const palabras = ["sol", "mariposa", "casa", "televisor"];

const palabraMasLarga = palabras.reduce((acum, palabra)=> {
  acum[palabra.length] > palabra ? acum : palabra;
  return acum
}, 0);

console.log(palabraMasLarga); */

//Corrección:
const palabras = ["sol", "mariposa", "casa", "televisor"];

const palabraMasLarga = palabras.reduce((acum, palabra)=> {
  return palabra.length > acum.length ? palabra : acum;
});

console.log("2-A: " + palabraMasLarga);

//2-B
/* const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Maria", edad: 15 },
  { nombre: "Pedro", edad: 30 }
];

const mayoresEdad = personas.reduce((acum, persona)=> {
  persona.edad >=18;
return acum + 1
}, 0);

console.log("2-B: " + mayoresEdad); */
//Corrección:
const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Maria", edad: 15 },
  { nombre: "Pedro", edad: 30 }
];

const mayoresEdad = personas.reduce((acum, persona)=>{
  return persona.edad >= 18 ? acum+1 : acum;
}, 0);

console.log("2-B: " + mayoresEdad);

//2-C
/* const array = ["Ana", "Luis", "Pedro"];

const objeto = array.reduce((acum, elemento)=> {
  return acum[elemento.findIndexOf(elemento)]= acum
    .push(elemento)
}, {});

console.log(`2-C: ${objeto}`); */

//Corrección:
const array = ["Ana", "Luis", "Pedro"];

const objeto = array.reduce((acum, elemento, indice)=> {
  acum[indice] = elemento;
  return acum;
}, {});

console.log("2-C: ", objeto);

//2-D
const nums = [3, 15, 7, 22, 4, 12];

const sumaMayores = nums.reduce((acum, num)=> {
  return num > 10 ? acum + num : acum
}, 0);

console.log(`2-D: ${sumaMayores}`);