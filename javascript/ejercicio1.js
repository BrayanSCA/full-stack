let dineroCofla = prompt("Cuánto dinero tienes Cofla?");
let dineroRoberto = prompt("Cuánto dinero tienes Roberto?");
let dineroPedro = prompt("Cuánto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0,6 && dineroCofla < 1) {
  alert("Cofla, compra el helado de agua");
  alert("y te sobran: " + dineroCofla - 0,6);
}
else if (dineroCofla >= 1 && dineroCofla < 1,6) {
  alert("Cofla, compra el helado de crema");
  alert("y te sobran: " + dineroCofla - 1);
}
else if (dineroCofla >= 1,6 && dineroCofla < 1.7) {
  alert("Cofla, compra el helado heladix");
  alert("y te sobran: " + dineroCofla - 1,6);
}
else if (dineroCofla >= 1,7 && dineroCofla < 1.8) {
  alert("Cofla, compra el helado heladovich");
  alert("y te sobran: " + dineroCofla - 1,7);
}
else if (dineroCofla >= 1,8 && dineroCofla < 2,9) {
  alert("Cofla, compra el helado helardo");
  alert("y te sobran: " + dineroCofla - 1,8);
}
else if (dineroCofla >= 2.9) {
  alert("Cofla, compra el helado con confites o el pote de 1/4KG");
  alert("y te sobran: " + dineroCofla - 2,9);
}
else {
  alert("lo siento, no te alcanza para ningún helado.");
}