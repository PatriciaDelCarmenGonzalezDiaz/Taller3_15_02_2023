//Realizar un programa que lea N números, calcule y escriba 
//la suma de los pares y el producto de los impares

let continuar = true;
let suma = 0;
let producto = 1;
let mensaje = " Los numeros digitados son: ";
do {
    let num = Number(prompt("Digite un numero, si desea detenerse Digite una Letra"));
    if (isNaN(num)) {
        continuar = false;
    } else {
        mensaje += num + ",";
        if (num % 2 == 0) { //Es Par
            suma += num;
        } else { //Es Impar
            producto *= num;
        }
    }
} while (continuar)
alert(mensaje + " y la suma de los pares es " + suma + " y el producto de los impares es " + producto);
