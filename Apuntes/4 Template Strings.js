                                                                                                   /*
Concatenar sirve para unir una cadena de texto con una variable.                                   */

let nombre =  'Daniel';
let apellido = 'Lopez';

// Forma De Concatenar

let saludo = "Hola me llamo " + nombre + " " + apellido + "!";

console.log(saludo);

                                                                                                   /*
              Interpolación De Variables:
Esto significa meter dentro de una cadena de texto el valor dinamicamente de una variable. 
Para ello tenemos que hacer uso de una carecteristica implementada en las cadenas de texto
desde el año 2015 ( Template Strings ).                                                            */

// Template String

let nombre2 = nombre;
let apellido2 = apellido;


let saludo2 = `Hola mi nombre es ${nombre2} ${apellido2}.`;

console.log(saludo2);

                                                                                                   /*
Las Template Strings nos permite crear cadenas de texto mas legible y flexible.

Si hicieramos esto con comillas dobles nos arrojaria error de sintaxis.                            */

let ul = `hola
Como 
estas 
bien?
o no `;
console.log(ul);
