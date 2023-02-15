//Realizar un programa que permita leer 2 números diferentes 
//y nos diga cual es el mayor de los 2 números

let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

if (num1 == num2) {
    alert(`El numero ${num1} y el numero ${num2} son iguales`);
} else if (num1 > num2) {
    alert(`El numero ${num1} es mayor que el numero ${num2}`);
} else {
    alert(`El numero ${num2} es mayor que el numero ${num1}`);
}