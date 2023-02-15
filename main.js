//Realizar un programa de procesos en el que se almacenen 3 números 
//en 3 variables A, B y C. El diagrama debe decidir cual es el mayor 
//y cual es el menor

let A = Number(prompt("Digite el primer número"));
let B = Number(prompt("Digite el segundo número"));
let C = Number(prompt("Digite el tercer número"));
let mayor = 0;
let menor = 0;

if (A == B && B == C) {
    alert(`los numeros ${A} , ${B} y ${C2} son iguales`);
} else {
    if (A > B) {
        mayor = A;
        menor = B;
    } else {
        mayor = B;
        menor = A;
    }
    if (mayor < C) {
        mayor = C;
    }
    if (menor > C) {
        menor = C;
    }
    alert(`De los numeros ${A} , ${B} y ${C} , el mayor es ${mayor} y el menor es ${menor}`);
}
