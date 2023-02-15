//Realice un programa que calcule el máximo de N números 
//leídos desde teclado

let mayor = 0;
let num = 0;
let i = 0;
let continuar = true;
let mensaje="Los numeros son: ";

do {
    num = Number(prompt("Digite un número o una letra si quiere parar"));
    console.log(num);
    if (isNaN(num)) {
        continuar = false;
    } else {
        mensaje += num + ", ";
        if (i== 0) {
           mayor = num;
        } else {
            if (num > mayor) {
                mayor = num;
            } 
        }
        i++; 
    }
} while (continuar)
alert(mensaje + " y el mayor número es " + mayor);