                                                                                                   /* 
Las propiedades soncaracteristicas que esta definiendo el objeto.
Los metodos son acciones que el objeto hace, todos los metodos finalizan con ().                   */

                                                                                                   /*
   Cadenas De Texto 
Las cadenas de texto se encierran en ( " " ) no importa el tipo de comillas ( ` ´ ) o ( ' ' ).
Las comillas dobles son las mas utilizadas ( " " ) utiliza la que mas te guste.                    */

let nombre = "Daniel";
let apellido = 'Lopez';
let saludo = new String(`Hola Mundo`);
let texto = "    Toca levantarme a recoger a Dylan en la escuela    ";

                                                                                                   /*
Con ( console.log() ) podemos verificar que nuestro codigo esta funcionando
como esperamos y encontrar errores en el codigo.                                                   */

console.log(nombre, apellido, saludo); /* Esto imprime en consola las variables nombre, apellido
                                          y saludo en la consola.                                  */

console.log(nombre.length, apellido.length, saludo.length);

console.log(nombre.toLocaleUpperCase());
console.log(saludo.toLowerCase());

console.log(texto.includes("Dylan"));
console.log(texto.includes("Daniel"));
console.log(texto);
console.log(texto.trim());
console.log(texto.split(" "));


                                                                            		           /*
Cada tipo de dato en JavaScrip tiene sus propias Propiedades y sus propios Metodos.
Las propiedades son caracteristicas, atributos.

Los metodos son acciones o funciones que van a permitir ejecutar algo con la variable
o tipo de dato que este trabajando.                                                                */
