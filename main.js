//Realizar un programa que permita escribir los 100 primeros pares.

let mensaje = " Los primeros 100 numeros pares son: "
let par = 0;

for (var i = 0; i <= 100; i++) {
    par = i * 2;
    mensaje += par +", "
}
//quitar la ultima ,
let mensaje2 = mensaje.substring(0,mensaje.length-2);
alert(mensaje2);
