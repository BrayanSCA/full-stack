const juegos = [
  { titulo: "Zelda", rating: 9 },
  { titulo: "FIFA", rating: 6 },
  { titulo: "Call of Duty", rating: 8 },
  { titulo: "Among Us", rating: 5 },
  { titulo: "Minecraft", rating: 10 },
];

//1
/*
const titulos = juegos.map(titulo => juegos.titulo);
*/
//corrección:
const titulos = juegos.map(juego => juego.titulo);

//2.
/*
const destacados = juegos.filter(rating => juegos.rating >= 8);
*/
//corrección:
const destacados = juegos.filter(juego => juego.rating >= 8);

//3.
/*
const juegoPerfecto = destacados.find(perfect => destacados.rating === 10);
*/
//corrección:
const juegoPerfecto = destacados.find(perfect => destacados.rating === 10);
