console.log("estoy vivo");

/*Operadores
    Un elemento que nos permite realizar entre dos o mas elementos.
    -operadores aritmeticos( +, -, *, /)
    -operadores de asignación (=,==,=== / asignacion, igualdad, igualdas estricta)
    -operadores de cadenas (ToLowerCase, toUperCase, trim, ToString, concat)
    -operadores logicos (&&, ||, !)
    -operadores de comparacion (<,>, <=, >=, ==, ===)
*/

//Operadores aritmeticos- Son operadores que nos permiten tomar valores numericos como sus operandos y teornar un valor numerico unico, Corresponden a operaciones matematicas.
let resultado = 5 + 5;
let resultado1 = 10 - 4;
let resultado2 = 6 * 3;
let resultado3 = 15 / 3;
let resultado4 = 10 % 3;
let numero = 5;
numero++;
let numero1 = 8;
numero--;

//operadores de asignacion
5 == "5" //true
5 === "5" //false

function celsiusAFahrenheit(celsius) {

    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

var temperaturaCelsius = 60;
var temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius + " grados Celsius son " + temperaturaFahrenheit + " grados Fahrenheit.");


//operadores aritmeticos
/*
Son operadores que nos permiten tomar valores numericos como sus operados y retornar un valor numericio unico. Correponden a operaciones matematicas.
suma (+)
resta (-)
ultiplicacion (*)
division (/)
residuo/modulo (%)
exponenciacion (**)
incremento (++)
decremento (--)
*/

///Variables
let num1 = 10;
let num2 = 2;
let num3 = "5";


//operaciones
suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;
residuo = num1 % num2;
exponenciacion = 10 ** 2;



console.log("Valor del numero 1 antes del incremento: ", num1)
// NOTA: cuando usamos incremento el valor se reasigna (suma y reasigna en la misma operacion)
incremento = num1++;
decremento = num2--;
console.log("Valor del numero 1 despues del incremento: ", num1)
///Impresiones en pantalla
console.log("Suma de 10 + 2,", suma)
console.log("Suma de 10 + 2,", num1 + num2)
console.log("Suma de 10 + 2,", 10 + 2)

/*
Operadores de comparacion
Operadores que nos permiten comparar dos datos y al hacerlo obtendremos un valor booleano (true o false);
- mayor que (>)
- menor que (<)
- mayor o igual que (>=)
- menor igual que (<=)
- igual (==)
- estrictamente igual (===)
- no es igual (!=)
- no es estrictamente igual (!==)



igual (==)
Sirve para comparar dos valores sean iguales
*/

let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

// 13 == "13" /// truue
// 13 === "13" /// false
edadFelipe = 30;

if (edadFelipe >= 18){
    console.log("Puedes ir a la pachangona");
}else {
    console.log("Te quedas en casa");
 }

 /*
 Operadores de asignacion
 
 Son los operadores que utilizan para asignar un valor de una variable. Se usa el operador =
 let edad = 31;
 let saldo = 0;

 */

 /* Operadores logicos 
Nos devuelven un resultado a partir de que sumpla ( o no) una condicion, el resultado es booleano (true o false)
 - AND && determina si dos expresiones son verdaderas, si ambas son verdaderas, el resultado es verdadro. Si alguna de ellas es falsa, todo el resultado es falso. si ambas son falsas, todo es falso


 */

 let tengoUnCrush = true;
 let miCrushMeQuiere = false;

if (tengoUnCrush && miCrushMeQuiere) {
console.log("estoy Feliz");

}else {
    console.log("Haganse a un lado que me quiero automorir");
}
/*  
- OR ||: sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos afirmaciones es verdadera, todo es verdadero. si las dos son falsas, todo es falso

*/

if (hayChilaquilesVerdes || hayCarneEnSuJugo){
    console.log("Felipe desayuna chido");
}else {
    console.log("Felipe no desayuna chido");
}

/*
 NOT (!): regresa lo contrario de lo que evaluamos
*/

//Este codigo esta incompleto, puede causar errores
//if ((edadFelipe >= 18 && salfoFelipe = !0) || (edadFelipe>=18 && amigosQueInviten = true)){

