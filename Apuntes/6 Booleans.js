let verdadero = true;
let falso = false;

console.log(verdadero, falso);

console.log(typeof verdadero, typeof falso);

                                                                                                   /*
Valores que tienden a Verdadero:

true            new Date()                 -Infinity
{}              -42
[]              3.14
42              -3.14
"foo"           Infinity
                                                                                                   */
console.log(Boolean(-7));
console.log(Boolean(" "));

                                                                                                   /*
Valores que tienden a falso:

false               0n
null                NaN
undefined           ""
0                   -0
                                                                                                   */
console.log(Boolean(""));
console.log(Boolean(0));

                                                                                                   /* 
undefined:
Se utiliza para indicar que una variable ha sido declarada
pero aun no se le ha asignado ningun valor.
                                                                                                   */

let variableVacia;
console.log(variableVacia);


                                                                                                   /*
null:
El valor null se utiliza para indicar que una variable esta vacia o no
tiene ningun valor. A diferencia de undefined, null se puede asignar
explicitamente a una variable. Por ejemplo si queremos vaciar una variable
podemos asignarle el valor null:
                                                                                                   */

let nulo = null;
console.log(nulo);


                                                                                                   /*
NaN:
El valor NaN ( Not a Number ) se utiliza para indicar que una operación
matematica ha producido un resultado que no es un numero valido.
Por ejemplo, si intentamos dividir una cadena de texto con un numero,
obtendremos como resultado NaN.
                                                                                                   */

let noEsUnNumero = "Daniel" / 7;
console.log(noEsUnNumero);
