/* Desde ECMAScrip 6 ( 2015 ) tenemos una palabra reservada llamada ( const ) nos permite crear
variables, utilizaremos esta palabra ( const ) cuando sepamos que el valor de esta variable no
va a cambiar su valor durante el flujo de nuestra aplicación.

Las declaraciones con ( const ) no pueden estar vacias, lo que ( var, let ) si deja declarar
variables vacias.   */


/* Con las constantes no se puede reasignar el valor a una constante que ya le asignamos el valor.  */

const PI = 3.1416;// <== Constante que le asignamos valor.

/*
PI = 3.15;  <== Esto arrojaria error en la consola,
                  ya que no podemos cambiar el valor de la constante.   */


/* Pasa algo diferente cuando declaramos una constante con valores compuestos, donde si deja modificar
la constante y agregarle mas propiedades pero sigue siendo el mismo objeto.

Valores Compuestos:           |  Valores Primitivos:
* object = {}                 |  * string
* array = []                  |  * number
* function () {}              |  * boolean
* class {}                    |  * null
                              |  * undefined
                              |  * NaN
                              |
                              |
Los valores compuestos son    |  Los valores Primitivos
los que hace referencia del   |  son a los que se les accede
valor                         |  el valor directamente              */

const daniel = {
    nombre: "Daniel",
    edad: 23,
}

const color = ["negro", "blanco", "rojo"];

daniel.correo = "dsol@gmail.com";

color.push("amarillo");

console.log(daniel);
console.log(color);

/* Si a lo largo del flujo, tu variable no va a cambiar utiliza una constante.
   Si a lo largo del flujo, tu variable va a cambiar su valor utiliza let, var. */

   
