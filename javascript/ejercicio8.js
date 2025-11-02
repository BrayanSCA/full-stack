const peliculas = [
  { titulo: "Avatar", rating: 8 },
  { titulo: "Titanic", rating: 6 },
  { titulo: "Inception", rating: 10 },
  { titulo: "Toy Story", rating: 7 },
  { titulo: "Cars", rating: 5 },
  { titulo: "Interstellar", rating: 9 },
];
//1.
const titulos = peliculas.map(nombre => nombre.titulo); 

//2.
let buenas = peliculas.filter(pelicula => pelicula.rating >=7); 

//3.
let perfecta = buenas.find(buena => buena.rating === 10); 

//4.
/*
const mostrarResumen = (buenas, perfecta) => { 
    let nombres = buenas.map(buena=> bnstuena.titulo).join(", "); 
    console.log(`Las películas con buena puntuación son: ${nombres}`); 
    console.log(`La película perfecta es: ${perfecta}`); 
}; 
*/
//corrección:
const mostrarResumen = (buenas, perfecta) => {
  let nombres = buenas.map(buena => buena.titulo).join(", ");
  console.log(`Las películas con buena puntuación son: ${nombres}.`);
  console.log(`La película perfecta es: ${perfecta.titulo}.`);
};

//5.
/*
const agregarPelicula = (titulo, rating)=> { 
    const t = titulo; const r = rating; 
    let nueva = []; 
    nueva.push({titulo: t, rating: r2});
 };
 */
//corrección:
const agregarPelicula = (titulo, rating) => {
  peliculas.push({ titulo, rating });
  console.log(`Película agregada: ${titulo} (${rating}).`);
};

mostrarResumen(buenas, perfecta);