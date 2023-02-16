//Dados dos números enteros positivos N y D, 
//se dice que D es un divisor de N si el resto de dividir N entre D es 0. 
//Se dice que un número N es perfecto si la suma de sus divisores (excluido el propio N) es N

let N = Number(prompt("Digite el primer numero"));
let D = Number(prompt("Digite el segundo numero"));
let suma = 0;
let mensaje = "";

if (N%D == 0) {
    mensaje = D + " es divisor de " + N;
} else {
    mensaje = D + " no es divisor de " + N;
}
mensaje += " y la suma de sus divisores ";
for (var i = 1; i < N; i++) {
    if (N%i == 0) {
        suma += i;
        mensaje += i + "+";
    }
}
// quitamos el ultimo signo mas
let mensaje2 = mensaje.substring(0,mensaje.length - 1);
mensaje2 += " = " + suma + ", ";

if (suma == N) {
    alert(mensaje2 + "El numero es perfecto");
} else {
   alert( mensaje2 + "El numero no es perfecto");
}