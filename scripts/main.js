class Curso {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
  }
}
let misCursos = [
  new Curso(1, "Primer Nivel de Supervivencia", 100000),
  new Curso(2, "Segundo Nivel de Supervivencia", 120000),
  new Curso(3, "Tercer Nivel de Supervivencia", 140000),
  new Curso(4, "Tactico de Supervivencia", 160000),
  new Curso(5, "Primitivo de Supervivencia", 180000),
];

console.log(
  " Todos mis cursos son: ",
  misCursos.map((unCurso) => unCurso.nombre)
);

let identificadores = misCursos.map((unCurso) => unCurso.id);

const CURSOS_PERMITIDOS = [1, 2, 3, 4, 5];
const MENSAJE_CURSOS_PERMITIDOS =
  "¿A que curso deseas inscribirte? --> " + identificadores.join(", ");

function pedirCursos() {
  let cursosPermitidos = parseInt(prompt(MENSAJE_CURSOS_PERMITIDOS));
  while (!CURSOS_PERMITIDOS.includes(cursosPermitidos)) {
    cursosPermitidos = parseInt(prompt(MENSAJE_CURSOS_PERMITIDOS));
  }
  return cursosPermitidos;
}

let cursosPermitidos = pedirCursos();

console.log("el curso elegido es el ", cursosPermitidos);

let edad = parseInt(prompt("¿Cual es tu edad?"));
alert("Tu edad ingresada es " + edad);
console.log("Tu edad es ", edad);

let encontrado = misCursos.find((curso) => curso.id === cursosPermitidos);
let precio = encontrado.precio;
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
alert("El valor del curso MAS iva es de $" + precioFinal);
console.log("El valor del curso MAS iva es de $" + precioFinal);

let ingresante = 0;
while (ingresante < 2) {
  nombreIngresante = prompt("¿Cual es tu nombre completo?").toUpperCase();
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

const MODO_DE_PAGO = parseInt(
  prompt("¿Lo quiere abonar al contado o en cuotas? 1:CONTADO y 2:CUOTAS")
);

function calcularIncremento(cantidadCuotas, precioFinal) {
  let interes = 0;
  switch (cantidadCuotas) {
    case 3:
      interes = precioFinal * 0.2;
      break;
    case 6:
      interes = precioFinal * 0.45;
      break;
    case 9:
      interes = precioFinal * 0.65;
      break;
    case 12:
      interes = precioFinal * 0.9;
      break;
    default:
      break;
  }
  return interes;
}

const CUOTAS_PERMITIDAS = [3, 6, 9, 12];
const MENSAJE_CANTIDAD_CUOTAS =
  "¿En cuantas cuotas quieres hacer tu compra? --> " +
  CUOTAS_PERMITIDAS.join(", ");

function pedirCantidadDeCuotas() {
  let cantidadCuotas = parseInt(prompt(MENSAJE_CANTIDAD_CUOTAS));
  while (!CUOTAS_PERMITIDAS.includes(cantidadCuotas)) {
    cantidadCuotas = parseInt(prompt(MENSAJE_CANTIDAD_CUOTAS));
  }
  return cantidadCuotas;
}

let cantidadCuotas = 1;
let interes = 0;
let costoTotal = precioFinal;
let costoPorCuota = costoTotal / cantidadCuotas;

if (MODO_DE_PAGO == 2) {
  cantidadCuotas = pedirCantidadDeCuotas();
  interes = calcularIncremento(cantidadCuotas, precioFinal);
  costoTotal = costoTotal + interes;
  costoPorCuota = costoTotal / cantidadCuotas;
}

let mensaje =
  "El ingresante debera abonar un total de $" +
  costoTotal.toFixed(2) +
  ", en un total de " +
  cantidadCuotas +
  " cuotas, con un valor de $" +
  costoPorCuota.toFixed(2) +
  " por cada cuota";

if (cantidadCuotas == 1) {
  mensaje =
    "El ingresante debera abonar un total de $" +
    costoTotal.toFixed(2) +
    ", en un unico pago";
}

alert(mensaje);
console.log(mensaje);
