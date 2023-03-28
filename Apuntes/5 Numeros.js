let a = 1;
let b = new Number(2);
let c = 7.19;
let d = "5.6";

console.log(a,b);

// toFixed es un metodo que dice cuantos numeros decimales va a tener un valor numerico.
console.log(c.toFixed(1));

// parseInt este metodo nos devuelve solo el numero entero.
console.log(parseInt(c));

// parseFloat este metodo nos devuelve la parte Entera y Decimal.
console.log(parseFloat(c));

// typeof este metodo nos indica que tipo de dato es una variable. 
console.log(typeof c, typeof d);


// JavaScrip concatena el valor numerico y cadena de texto.
console.log(a + d);

                                                                                                   /*
parseInt convierte "5.6" en numero y ejecuta la operacion
devolviendo solo el numero Entero de la suma.                                                      */
console.log(a + parseInt(d));

                                                                                                   /*
parseFloat convierte "5.6" en numero y ejecuta la operacion, devolviendo
el numero Entero y Decimal de la suma.                                                             */
console.log(a + parseFloat(d));

