//1. 
const numeros = [2, 4, 6, 8, 10]; 
const raizCuadrada = numeros.map((raiz)=>Math.sqrt(raiz)); 
console.log(raizCuadrada); 

//2. 
const nombres = ["Ana", "Roberto", "Luisa", "Jose", "Valentina"]; 
const filtrados = nombres.filter((filtrado)=> filtrado.length > 5); 
console.log(filtrados) 

//3. 
const numeros2 = [10, 25, 40, 55, 60]; 
const mayor = numeros2.find((num)=>num > 50); 
console.log(mayor);