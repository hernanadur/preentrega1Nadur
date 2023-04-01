let edad = parseInt(prompt("¿Cual es tu edad?"));
alert("Tu edad ingresada es " + edad);
console.log("Tu edad es ", edad);
let precio = 100000;
let descuento = 0;
let porcentaje = 30;
let total = precio;
if (edad <= 18) {
  descuento = precio * (porcentaje / 100);
  alert(
    "¡Felicitaciones de acuerdo a tu edad ingresada tienes una bonificacion del " +
      porcentaje +
      "%!"
  );
  console.log(
    "¡Felicitaciones de acuerdo a tu edad ingresada tienes una bonificacion del " +
      porcentaje +
      "%!"
  );
} else {
  edad > 19;
}
total = precio - descuento;
alert("De acuerdo a tu edad el curso tiene un valor de $ " + total);
console.log("De acuerdo a tu edad el curso tiene un valor de $ " + total);

const suma = (a, b) => a + b;
const iva = (x) => x * 0.21;
let valorCurso = total;
let precioFinal = suma(valorCurso, iva(valorCurso));
alert("El valor del curso mas iva es de $" + precioFinal);
console.log("El valor del curso mas iva es de $" + precioFinal);

let ingresante = 0;
while (ingresante < 5) {
  nombreIngresante = prompt("¿Cual es tu nombre completo?");
  if (nombreIngresante == "") {
    alert("El nombre tiene que tener algun caracter");
    console.log("El nombre tiene que tener algun caracter");
    continue;
  }
  if (nombreIngresante.length < 8) {
    alert("El nombre debe tener al menos 8 caracteres");
    console.log("El nombre debe tener al menos 8 caracteres");
    continue;
  }
  if (nombreIngresante.length > 30) {
    alert("El nombre no puede exceder los 30 caracteres");
    console.log("El nombre no puede exceder los 30 caracteres");
    continue;
  }
  ingresante++;
  alert(
    "Felicitaciones ya estas inscripto, tu numero de ingreso es el " +
      ingresante +
      " Bienvenido a nuestro curso " +
      nombreIngresante
  );
  console.log(
    "Felicitaciones ya estas inscripto, tu numero de ingreso es el " +
      ingresante +
      " Bienvenido a nuestro curso " +
      nombreIngresante
  );
}

suma()