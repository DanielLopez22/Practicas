/*
 JavaScrip anteriormente tenia un caracteristica, que las variables declaradas con la palabra recervada (var) 
 en bloques if, for, while; Si habia una funcion declarada con esta variable, esta variable salia de estos loops y se definia
 desde la funcion, si esta variable no estaba definida en una funcion JavaScrip la definia en Ambito Global
 esto se conocia como Elevacion.
*/

// Ejemplo:
/*
function uno (num) {//                                                    Esta funcion
    var b = num;//                                                                  ^^
} //                                                                                ||
//                                                                                  ||
for (num === 1) { // <=== la variable (num) ya definida, sale de aqui y se define desde
}

// Otro ejemplo:

// Cuando la variable no esta definida en ninguna funcion.

if (num === 0) { // <=== la variable (num) ya definida, pero sin declararse en una funcion sale de aqui
}                // y se Eleva al Ambito Global, asi mismo pasa con los loops for, while.
*/

/*
 Esto cambio con ECMAScrip 6 en el año 2015, donde se implemento el Ambito De Bloque pero para poder ser utilizado,
 tendriamos que reemplazar la palabra reservada (var) con la entonces nueva palabra reservada (let) esto hace que cualquier
 variable declarada con dicha palabra sea de Ambito De Bloque.
*/

// Ejemplo:
/*
function e1 (v) {
    let a = v; // <===  Esta variable asignada solo se ejecutara en este Bloque de Codigo.
}if (v < 10) {
    return v;
}
*/

/*
 En conclucion definir una variable con ( var ) esa variable sera de Ambito Global.
 Y si defines una variable con ( let ) esta sera de Ambito De Bloque.

 Utilizar ( var ) se puede usar, pero se considera mala practica, ya que te podria saltar un error en la reasignacion
 de valores.
*/